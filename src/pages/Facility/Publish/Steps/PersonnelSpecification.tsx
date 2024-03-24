import { FormProvider, useForm } from 'react-hook-form'
import { GenericButton, GenericInput } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { Input } from '@mui/base'
import { FacilityType, IState } from '../../../../redux/slices/_types'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import React from 'react'
import { formData } from '../../../../utils/constants'

const PersonnelSpecification = () => {
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
  return (
    <div className="details-container border">
      <div className="details-container__wrapper" style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Personnel Specification
        </p>
        <FormProvider {...methods}>
          <form className="form-control" style={{ paddingBottom: '10px' }}>
            <div>
              <div>Enter Job Qualification</div>
              <p style={{ fontSize: '14px' }}>
                list your essential criteria for the job qualification.
              </p>
              <GenericInput
                type="multiline-input"
                name="qualification"
                onChange={handleChange}
                label=""
                placeholder="200 characters allowed"
                rows={5}
                sx={{ borderRadius: '0.5rem' }}
              />
            </div>
            <div>
              <div>Enter Addition Needed</div>
              {/* <p style={{ fontSize: '14px' }}>
                list your essential criteria for the job qualification.
              </p> */}
              <GenericInput
                type="multiline-input"
                name="additional_information"
                onChange={handleChange}
                label=""
                placeholder="200 characters allowed"
                rows={5}
                sx={{ borderRadius: '0.5rem' }}
              />
            </div>
            {/* TODO:Add supporting document later */}
            <div className="flex flex-col gap-3">
              <div>Supporting Document</div>
              <p style={{ fontSize: '14px', maxWidth: '20rem' }}>
                Do you want to upload any supporting documents that will give
                more info to applicants
              </p>
              <Input
                type="file"
                name="Job title"
                placeholder="200 characters allowed"
              />
              <div className="flex gap-3 items-center">
                <GenericButton
                  type="button"
                  sx={{
                    width: '8rem',
                    bgcolor: 'white',
                    border: `1px solid ${colors.text.pineGreen}`,
                    color: `${colors.text.pineGreen}`,
                  }}
                  title="Remove Pdf"
                />
                <GenericButton
                  type="button"
                  sx={{ width: '8rem' }}
                  title="Add Pdf"
                />
              </div>
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

export default PersonnelSpecification
