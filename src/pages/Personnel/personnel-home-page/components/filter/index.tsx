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
import useSpecialities from '../../hook/useSpecialities'
import { FilterRecordType } from '../../../../../_shared/@types'
import {
  setShiftTypes,
  setShifts,
  setSpeciality,
} from '../../slice/filterSlice'
import { GenericButton, GenericSelect } from '../../../../../_shared'
import { ClearBtnProps, signInProps } from '../../../../auth/signin/styles'
import useShiftType from '../../hook/useShiftType'
import ShimmerLoading from '../../../../../_shared/shimmer/Shimmer'

const shifts = ['One-Time', 'Full-Time']

function valuetext(value: number) {
  return `GHS${value}`
}

const FilterPane = () => {
  const [value, setValue] = React.useState<number[]>([15000, 84000])

  const [customSalary] = React.useState<boolean>(false)

  const { data: Specialties, isLoading: isLoadingSpecialties } =
    useSpecialities()
  const { data: shiftTypes, isLoading: isLoadingShiftTypes } = useShiftType()

  const specialityRecord = useSelector(
    (state: RootState) => state.filter.speciality
  )
  const shiftTypeRecord = useSelector(
    (state: RootState) => state.filter.shift_types
  )
  const shiftRecord = useSelector((state: RootState) => state.filter.shifts)

  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>()

  const queryBackend = () => {
    const str: { [key: string]: string } = {}

    if (strFrmRecord(specialityRecord).length > 0) {
      str['required_speciality'] = strFrmRecord(specialityRecord)
    }
    if (strFrmRecord(shiftRecord).length > 0) {
      str['full_time'] = strFrmRecord(shiftRecord)
    }
    if (customSalary) {
      str['salary_range'] = `${value[0]}-${value[1]}`
    }
    if (strFrmRecord(shiftTypeRecord).length > 0) {
      str['shift_type'] = strFrmRecord(shiftTypeRecord)
    }
    console.log(str)

    const queryStr = new URLSearchParams(str)
    dispatch(setEndpoint('postings/?' + queryStr.toString()))
  }

  const clearFilter = () => {
    dispatch(setEndpoint('postings/?'))
    Object.entries(specialityRecord).forEach(([key]) => {
      console.log(key)
      dispatch(
        setSpeciality({
          key: +key,
          value: false,
        })
      )
    })
    Object.entries(shiftTypeRecord).forEach(([key]) => {
      console.log(key)
      dispatch(
        setShiftTypes({
          key: +key,
          value: false,
        })
      )
    })
  }

  function strFrmRecord(cat: FilterRecordType): string {
    let str: string = ''
    Object.entries(cat).forEach((entery) => {
      if (entery[1]) {
        str += `${entery[0]},`
      }
    })
    return str.slice(0, -1)
  }

  function toSentenceCase(str: string) {
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1)
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
  function handleShiftTypes(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    dispatch(
      setShiftTypes({
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
          <Filterheading>Job Type</Filterheading>
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
                  margin: '0px',
                  '&.MuiFormControlLabel-root': {
                    color: '#00000099',
                    fontFamily: 'Inter',
                  },
                }}
              />
            ))}
          </FormGroup>

          <Filterheading>Shift Type</Filterheading>
          {isLoadingShiftTypes ? (
            <ShimmerLoading height="2rem" count={3} />
          ) : (
            <>
              <FormGroup>
                {shiftTypes?.map((shift, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        name={shift}
                        checked={shiftTypeRecord[index] ?? false}
                        onChange={(event) => handleShiftTypes(event, index)}
                      />
                    }
                    label={toSentenceCase(shift) + ' Shift'}
                    sx={{
                      margin: '0px 0px 0px 0px',
                      '&.MuiFormControlLabel-root': {
                        color: '#00000099',
                      },
                    }}
                  />
                ))}
              </FormGroup>
            </>
          )}

          <Filterheading>Specialties</Filterheading>
          {isLoadingSpecialties ? (
            <ShimmerLoading height="2rem" count={3} />
          ) : (
            <>
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
                    label={toSentenceCase(job)}
                    sx={{
                      margin: '0px 0px 0px 0px',
                      '&.MuiFormControlLabel-root': {
                        color: '#00000099',
                      },
                    }}
                  />
                ))}
              </FormGroup>
            </>
          )}

          <Filterheading>
            Expected Salary /<GreyText>Month</GreyText>
          </Filterheading>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name={'custon'} />}
              label={'Under $1000'}
              sx={{
                margin: '0px',
                '&.MuiFormControlLabel-root': {
                  color: '#00000099',
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox name={'custon'} />}
              label={'$1000 - $5000'}
              sx={{
                margin: '0px',
                '&.MuiFormControlLabel-root': {
                  color: '#00000099',
                },
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
                padding: '10px 0',
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
                      paddingLeft: '5px',
                    }}
                  />
                }
                sx={{
                  '&.MuiFormControlLabel-root': {
                    flexDirection: 'row-reverse',
                    gap: '5px',
                    margin: 0,
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
                      paddingLeft: '5px',
                    }}
                  />
                }
                label={<FilterTextBubble>Max</FilterTextBubble>}
                sx={{
                  '&.MuiFormControlLabel-root': {
                    flexDirection: 'row-reverse',
                    gap: '5px',
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
              sx={{
                '&.MuiSlider-root': {
                  color: '#036B5E',
                },
                // '&.css-eg0mwd-MuiSlider-thumb': {
                //   outline: '4px solid white !important',
                //   boxShadow: '0px 0px 8px 1px black',
                // },
              }}
            />
          </FormGroup>
          {/* Apply Filter Btn */}
          <GenericButton
            title="Apply"
            sx={signInProps}
            size="large"
            onClick={queryBackend}
          />
          {/* Clear Filter Btn */}
          <GenericButton
            title="Clear"
            sx={ClearBtnProps}
            size="large"
            onClick={clearFilter}
          />
        </FilterContent>
      </FilterWrapper>
    </FilterContainer>
  )
}

export default FilterPane
