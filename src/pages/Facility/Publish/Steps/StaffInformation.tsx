import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import LocoSelect from '../../../../_shared/components/inputs/LocoSelect'
import { FacilityType, IState } from '../../../../redux/slices/_types'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import { formData } from '../../../../utils/constants'

const StaffInformation = () => {
  const dispatch = useAppDispatch()
  const methods = useForm()

  const getFormValues = (): FacilityType => {
    const storedValue = loadFromLocalStorage('FACILITY_FORM_DATA') as IState
    if (!storedValue) return formData
    return storedValue.publish_form_state as FacilityType
  }

  const [values, setValue] = React.useState<FacilityType>(getFormValues)
  console.log('🚀 ~ JobDetails ~ values:', values)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setValue({ ...values, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setValue({ ...values, [name]: value })
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
              name="required_staff_group"
              value={values.required_staff_group}
              onChange={handleChange}
            >
              <FormControlLabel
                label="Medicals"
                value={'MEDICAL'}
                control={
                  <Radio
                    icon={<RadioBtn />}
                    checkedIcon={<CheckedRadioBtn />}
                  />
                }
              />
              <FormControlLabel
                label="Allied and Health Professionals"
                value={'ALLIED_AND_HEALTH_PROFESSIONALS'}
                control={
                  <Radio
                    icon={<RadioBtn />}
                    checkedIcon={<CheckedRadioBtn />}
                  />
                }
              />
              <FormControlLabel
                label="Administative and Support Staff"
                value={'ADMINISTRATIVE'}
                control={
                  <Radio
                    icon={<RadioBtn />}
                    checkedIcon={<CheckedRadioBtn />}
                  />
                }
              />
              <FormControlLabel
                label="Nurses and Midwifery"
                value={'NURSES_AND_MIDWIFERY'}
                control={
                  <Radio
                    icon={<RadioBtn />}
                    checkedIcon={<CheckedRadioBtn />}
                  />
                }
              />
              <FormControlLabel
                label="Estates and Ancillary"
                value={'ESTATES_AND_ANCILLARY'}
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
                name="required_area_of_work"
                placeholder="Select area of work..."
                value={values.required_area_of_work}
                onChange={handleSelectChange}
                options={
                  values.required_staff_group === 'MEDICAL'
                    ? medicalList
                    : values.required_staff_group ===
                        'ALLIED_AND_HEALTH_PROFESSIONALS'
                      ? AlliedHealthList
                      : values.required_staff_group === 'ADMINISTRATIVE'
                        ? AdministativeList
                        : values.required_staff_group === 'NURSES_AND_MIDWIFERY'
                          ? NursesAndMidwiferyList
                          : values.required_staff_group ===
                              'ESTATES_AND_ANCILLARY'
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
