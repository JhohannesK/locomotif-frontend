import { GenericSelect } from '../../../../_shared'
import { FormGroup, FormControlLabel, Checkbox, Slider } from '@mui/material'
import {
  FilterContent,
  FilterTitle,
  FilterWrapper,
  Filterheading,
} from './styles'
import * as React from 'react'

const shifts = ['Morning Shift', 'Afternoon Shift', 'Evening/Night']
const jobCategories = [
  'Nurse',
  'Doctor',
  'Pharmacist',
  'Laboratory Scientist',
  'Radiographer',
  'Physiotherapist',
  'Dietician',
  'Biomedical Engineer',
]
const Salaries = [
  'GHS 1000 - 2000',
  'GHS 2000 - 3000',
  'GHS 3000 - 4000',
  'GHS 4000 - 5000',
  'GHS 5000 - 6000',
]

function valuetext(value: number) {
  return `GHS${value}`
}

const FilterPane = () => {
  const [value, setValue] = React.useState<number[]>([20, 37])

  // @ts-expect-error  Not using event props
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }
  return (
    <FilterWrapper>
      <FilterTitle>Filter</FilterTitle>
      <FilterContent>
        <Filterheading>Location</Filterheading>
        <GenericSelect
          sx={{ width: '100%' }}
          defaultValue="Airport, Accra"
          data={['Airport, Accra', 'Kumasi', 'Tema', 'Takoradi']}
        />
      </FilterContent>

      <Filterheading>Shift System</Filterheading>
      <FormGroup>
        {shifts.map((shift, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
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

      <Filterheading>Job Category</Filterheading>
      <FormGroup>
        {jobCategories.map((job, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
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

      <Filterheading>Salary Range</Filterheading>
      <FormGroup>
        {Salaries.map((salary, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            label={salary}
            sx={{
              // color: 'red',
              '&.Mui-checked': {
                color: 'red',
              },
            }}
          />
        ))}
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </FormGroup>
    </FilterWrapper>
  )
}

export default FilterPane
