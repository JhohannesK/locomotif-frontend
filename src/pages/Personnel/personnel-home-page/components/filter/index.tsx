import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Input,
} from '@mui/material'
import {
  FilterContent,
  FilterMinMax,
  FilterTextBubble,
  FilterTitle,
  FilterWrapper,
  Filterheading,
  GreyText,
} from './styles'
import * as React from 'react'
import { FilterContainer } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../../../../../redux/store'
import { setEndpoint } from '../../slice/personnelSlice'
import useFilter from '../../hook/useFilters'
import { FilterRecordType } from '../../../../../_shared/@types'
import { setShifts, setSpeciality } from '../../slice/filterSlice'
import { GenericButton, GenericSelect } from '../../../../../_shared'
import { signInProps } from '../../../../auth/signin/styles'

const shifts = ['One-Time', 'Full-Time']

function valuetext(value: number) {
  return `GHS${value}`
}

const FilterPane = () => {
  const [value, setValue] = React.useState<number[]>([15000, 84000])

  const [customSalary] = React.useState<boolean>(false)

  const { data: Specialties, isLoading: isLoadingSpecialties } = useFilter()

  const specialityRecord = useSelector(
    (state: RootState) => state.filter.speciality
  )
  const shiftRecord = useSelector((state: RootState) => state.filter.shifts)

  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>()

  const queryBackend = () => {
    const str: { [key: string]: string } = {}

    if (StrFrmRecord(specialityRecord).length > 0) {
      str['required_speciality'] = StrFrmRecord(specialityRecord).slice(0, -1)
    }
    if (StrFrmRecord(shiftRecord).length > 0) {
      str['shift_type'] = StrFrmRecord(shiftRecord).slice(0, -1)
    }
    if (customSalary) {
      str['salary_range'] = `${value[0]}-${value[1]}`
    }

    const queryStr = new URLSearchParams(str)
    dispatch(setEndpoint('postings/?' + queryStr.toString()))
  }

  function StrFrmRecord(cat: FilterRecordType): string {
    let str: string = ''
    Object.entries(cat).forEach((entery) => {
      if (entery[1]) {
        str += `${entery[0]},`
      }
    })
    return str
  }

  function hundleSpecialities(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    dispatch(
      setSpeciality({
        key: index,
        value: event.target.checked,
      })
    )
  }

  function hundleShifts(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    dispatch(
      setShifts({
        key: index,
        value: event.target.checked,
      })
    )
  }
  // @ts-expect-error  Not using event propsx
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  const hundleMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue([Number(event.target.value), value[1]])
  }

  const hundleMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue([value[0], Number(event.target.value)])
  }

  return (
    <FilterContainer>
      <FilterWrapper>
        <FilterTitle>Filter</FilterTitle>

        <FilterContent>
          <Filterheading>Location</Filterheading>
          <GenericSelect label="Location" data={['Accra', 'Kumasi', 'Ho']} />
          <Filterheading>Shift System</Filterheading>
          <FormGroup>
            {shifts.map((shift, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={shift}
                    checked={shiftRecord[index] ?? false}
                    onChange={(e) => hundleShifts(e, index)}
                  />
                }
                label={shift}
                sx={{
                  margin: '0px 0px 0px 0px',
                }}
              />
            ))}
          </FormGroup>

          {!isLoadingSpecialties ? (
            <>
              <Filterheading>Specialties</Filterheading>
              <FormGroup>
                {Specialties?.map((job, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        name={job}
                        checked={specialityRecord[index] ?? false}
                        onChange={(event) => hundleSpecialities(event, index)}
                      />
                    }
                    label={job}
                    sx={{
                      margin: '0px 0px 0px 0px',
                    }}
                  />
                ))}
              </FormGroup>
            </>
          ) : (
            'Loading....'
          )}

          <Filterheading>
            Expected Salary /<GreyText>Month</GreyText>
          </Filterheading>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name={'custon'} />}
              label={'Under $1000'}
              sx={{
                margin: '0px 0px 0px 0px',
              }}
            />
            <FormControlLabel
              control={<Checkbox name={'custon'} />}
              label={'$1000 - $5000'}
              sx={{
                margin: '0px 0px 0px 0px',
              }}
            />
          </FormGroup>

          {/*  */}
          <FormGroup>
            <GreyText>My own preference</GreyText>
            <FilterMinMax
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0px ',
                margin: '0px 0px 0px 15px',
              }}
            >
              <FormControlLabel
                label={<FilterTextBubble>Min</FilterTextBubble>}
                control={
                  <Input
                    type="number"
                    name="min"
                    placeholder="Min"
                    value={value[0]}
                    onChange={hundleMin}
                    style={{
                      border: ' 1px solid #d6d6d6',
                      borderRadius: '5px',
                      padding: '1px 5px',
                    }}
                  />
                }
                sx={{
                  // color: 'red',
                  '&.Mui-checked': {
                    color: 'red',
                  },
                }}
              />

              <FormControlLabel
                control={
                  <Input
                    type="number"
                    name="max"
                    placeholder="Max"
                    value={value[1]}
                    onChange={hundleMax}
                    style={{
                      border: ' 1px solid #d6d6d6',
                      borderRadius: '5px',
                      padding: '1px 5px',
                    }}
                  />
                }
                label={<FilterTextBubble>Max</FilterTextBubble>}
                sx={{
                  // color: 'red',
                  '&.Mui-checked': {
                    color: 'red',
                  },
                }}
              />
            </FilterMinMax>

            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={1000}
              max={100000}
              step={1000}
            />
          </FormGroup>
          <GenericButton
            title="Apply"
            sx={signInProps}
            size="large"
            onClick={queryBackend}
          />
        </FilterContent>
      </FilterWrapper>
    </FilterContainer>
  )
}

export default FilterPane
