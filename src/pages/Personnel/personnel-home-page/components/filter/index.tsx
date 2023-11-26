import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Input,
} from '@mui/material'
import {
  FilterContent,
  FilterTitle,
  FilterWrapper,
  Filterheading,
} from './styles'
import * as React from 'react'
import { FilterContainer } from '../../styles'
import GeneralButton from '../../../../../_shared/components/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../../../../../redux/store'
import { setEndpoint } from '../../slice/personnelSlice'
import useFilter from '../../hook/useFilters'
import { FilterRecordType } from '../../../../../_shared/@types'
import { setShifts, setSpeciality } from '../../slice/filterSlice'

const shifts = ['One-Time', 'Full-Time']

function valuetext(value: number) {
  return `GHS${value}`
}

const FilterPane = () => {
  const [value, setValue] = React.useState<number[]>([2000, 37000])

  const [customSalary, setCustomSalary] = React.useState<boolean>(false)

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
  return (
    <FilterContainer>
      <FilterWrapper>
        <FilterTitle>Filter</FilterTitle>
        <GeneralButton
          variantText="contained"
          type="button"
          title="Apply Filter"
          onClick={queryBackend}
        />
        <FilterContent>
          <Filterheading>Location</Filterheading>
          {/* <GenericSelect
          name="location"
          sx={{ width: '100%' }}
          defaultValue="Airport, Accra"
          data={['Airport, Accra', 'Kumasi', 'Tema', 'Takoradi']}
        /> */}
        </FilterContent>

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
                // color: 'red',
                '&.Mui-checked': {
                  color: 'red',
                },
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
                    // color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                  }}
                />
              ))}
            </FormGroup>
          </>
        ) : (
          'Loading....'
        )}

        <Filterheading>Salary Range</Filterheading>
        <FormControlLabel
          control={
            <Checkbox
              name={'custon'}
              checked={customSalary}
              onChange={() => setCustomSalary(!customSalary)}
            />
          }
          label={'Custom Range'}
          sx={{
            // color: 'red',
            '&.Mui-checked': {
              color: 'red',
            },
          }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Input
                type="number"
                name="min"
                placeholder="Min"
                value={value[0]}
                disabled={!customSalary}
              />
            }
            label={'Min'}
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
                disabled={!customSalary}
              />
            }
            label={'Max'}
            sx={{
              // color: 'red',
              '&.Mui-checked': {
                color: 'red',
              },
            }}
          />

          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disabled={!customSalary}
            min={1000}
            max={100000}
            step={1000}
          />
        </FormGroup>
      </FilterWrapper>
    </FilterContainer>
  )
}

export default FilterPane
