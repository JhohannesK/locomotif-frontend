import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import React, { useEffect } from 'react'
import LocoSelect from '../../../../_shared/components/inputs/LocoSelect'
import { FacilityType, IState } from '../../../../redux/slices/_types'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import { formData } from '../../../../utils/constants'
import { updateFacilityPost } from '../../../../redux/slices/apis/facilityThunk'
import { setStatusCodeToDef } from '../../../../redux/slices/facilitySlice'

const StaffInformation = () => {
  const dispatch = useAppDispatch()
  const methods = useForm()
  const statusCode = useAppSelector((state) => state.facility.status_code)

  useEffect(() => {
    if (statusCode === '000') {
      dispatch(nextPage())
    }

    return () => {
      dispatch(setStatusCodeToDef())
    }
  }, [statusCode, dispatch])

  const getFormValues = (): FacilityType => {
    const storedValue = loadFromLocalStorage('FACILITY_FORM_DATA') as IState
    if (!storedValue) return formData
    return storedValue.publish_form_state as FacilityType
  }

  const [values, setValue] = React.useState<FacilityType>(getFormValues)
  console.log('🚀 ~ StaffInformation ~ values:', values)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

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
                onChange={(_, newValue) => {
                  setValue({
                    ...values,
                    required_area_of_work: (newValue as string)
                      .toUpperCase()
                      .split(' ')
                      .join('_'),
                  })
                  methods.setValue('required_area_of_work', newValue)
                }}
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
                  dispatch(
                    updateFacilityPost({
                      publish_form_state: values,
                      status_code: '001',
                    })
                  )
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
