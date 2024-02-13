import {
  CheckedRadioBtn,
  GenericButton,
  GenericInput,
  RadioBtn,
} from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { ButtonWrapper, Container, Wrapper } from './JobDetails'
import LocoDropdown from '../../../../_shared/components/Dropdown'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { InputBoxLabels } from '../../../auth/signin/styles'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'

const StaffInformation = () => {
  const dispatch = useAppDispatch()
  const methods = useForm()
  const [value, setValue] = React.useState('')
  console.log('🚀 ~ StaffInformation ~ value:', value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
  return (
    <Container>
      <Wrapper style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Staff Information
        </p>
        <FormProvider {...methods}>
          <form
            style={{
              display: 'flex',
              gap: '2rem',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <RadioGroup
              sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Full time"
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <LocoDropdown items={medicalList} title="Medical" />
              <LocoDropdown
                items={AlliedHealthList}
                title="Allied and Health Professionals"
              />
              <LocoDropdown
                items={AdministativeList}
                title="Administative and Support Staff"
              />
              <LocoDropdown
                items={NursesAndMidwiferyList}
                title="Nurses and Midwifery"
              />
              <FormControlLabel
                label={'Cleaner'}
                value={'Cleaner'}
                control={
                  <Radio
                    icon={<RadioBtn height="1.5rem" width="1.5rem" />}
                    checkedIcon={
                      <CheckedRadioBtn
                        outerRadius="1.1rem"
                        innerRadius=".5rem"
                      />
                    }
                  />
                }
              />
              {/* TODO: When the user selects any option, display that option in the input box and make input readonly */}
              <div>
                <InputBoxLabels>Area of work</InputBoxLabels>
                <GenericInput
                  name="area"
                  placeholder="Surgoen"
                  sx={{ width: '100%' }}
                  value={value}
                />
              </div>
            </RadioGroup>
            <ButtonWrapper>
              <GenericButton
                type="button"
                sx={{
                  width: '8rem',
                  bgcolor: 'white',
                  border: `1px solid ${colors.text.pineGreen}`,
                  color: `${colors.text.pineGreen}`,
                }}
                title="Previous"
                onClick={() => {
                  dispatch(prevPage())
                }}
              />
              <GenericButton
                type="button"
                sx={{ width: '8rem' }}
                title="Next"
                onClick={() => {
                  dispatch(nextPage())
                }}
              />
            </ButtonWrapper>
          </form>
        </FormProvider>
      </Wrapper>
    </Container>
  )
}

export default StaffInformation

const medicalList = [
  'Senior consultant',
  'Specialist',
  'Medical officer',
  'House officer',
  'Lab technician',
  'Nurse',
  'Dentist',
]

const AlliedHealthList = [
  'Dieticians',
  'Occupational therapist',
  'Physiotherapist',
  'Radiographer',
  'Speech therapist',
  'Pharmacist',
]

const AdministativeList = [
  'Human resource',
  'Accountant',
  'Auditor',
  'Medical director',
]

const NursesAndMidwiferyList = [
  'Medial & Dental',
  'Nurses & Midwifery',
  'Special Nurses',
  'Nurst assistant',
]
