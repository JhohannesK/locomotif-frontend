import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import LocoSelect from '../../../../_shared/components/inputs/LocoSelect'

type StaffInformationProps =
  | 'medicalList'
  | 'AlliedHealthList'
  | 'AdministativeList'
  | 'NursesAndMidwiferyList'
  | 'EstatesAndAncillaryList'
  | ''

const StaffInformation = () => {
  const dispatch = useAppDispatch()
  const methods = useForm()
  const [value, setValue] = React.useState<StaffInformationProps>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as StaffInformationProps)
  }

  return (
    <div className="details-container border">
      <div className="details-container__wrapper">
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Staff Information
        </p>
        <FormProvider {...methods}>
          <form className="form-control">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Replacing someone who's leaving"
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                label="Medicals"
                value={'medicalList'}
                control={
                  <Radio
                    icon={<RadioBtn />}
                    checkedIcon={<CheckedRadioBtn />}
                  />
                }
              />
              <FormControlLabel
                label="Allied and Health Professionals"
                value={'AlliedHealthList'}
                control={
                  <Radio
                    icon={<RadioBtn />}
                    checkedIcon={<CheckedRadioBtn />}
                  />
                }
              />
              <FormControlLabel
                label="Administative and Support Staff"
                value={'AdministativeList'}
                control={
                  <Radio
                    icon={<RadioBtn />}
                    checkedIcon={<CheckedRadioBtn />}
                  />
                }
              />
              <FormControlLabel
                label="Nurses and Midwifery"
                value={'NursesAndMidwiferyList'}
                control={
                  <Radio
                    icon={<RadioBtn />}
                    checkedIcon={<CheckedRadioBtn />}
                  />
                }
              />
              <FormControlLabel
                label="Estates and Ancillary"
                value={'EstatesAndAncillaryList'}
                control={
                  <Radio
                    icon={<RadioBtn />}
                    checkedIcon={<CheckedRadioBtn />}
                  />
                }
              />
            </RadioGroup>
            <div className="lg:w-96">
              <LocoSelect
                name=""
                placeholder="Select area of work..."
                options={
                  value === 'medicalList'
                    ? medicalList
                    : value === 'AlliedHealthList'
                      ? AlliedHealthList
                      : value === 'AdministativeList'
                        ? AdministativeList
                        : value === 'NursesAndMidwiferyList'
                          ? NursesAndMidwiferyList
                          : value === 'EstatesAndAncillaryList'
                            ? EstatesAndAncillaryList
                            : []
                }
              />
            </div>
            <div className="btn-group">
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
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default StaffInformation

const medicalList = [
  'Senior consultant',
  'Specialist',
  'Medical officer',
  'House officer',
  'Laboratory Scientist',
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
  'Podiatrists',
  'Speech pathologists',
  'Hospital Assistants',
  'Radiographer',
  'Laboratory Scientist',
  'Anesthetist',
  'Physician’s assistants',
  'Dietitians',
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

const EstatesAndAncillaryList = [
  'Porter',
  'Catering',
  'Laundry',
  'Maintenance',
  'Security',
  'Cleaner',
  'Driver',
]
