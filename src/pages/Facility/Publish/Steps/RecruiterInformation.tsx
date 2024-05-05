import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook'
import { GenericButton, Input } from '../../../../_shared'
import { colors } from '../../../../colors'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { FacilityType, IState } from '../../../../redux/slices/_types'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import React from 'react'
import { formData } from '../../../../utils/constants'
import { setStatusCodeToDef } from '@/redux/slices/facilitySlice'
import { updateFacilityPost } from '@/redux/slices/apis/facilityThunk'

const RecruiterInformation = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  const statusCode = useAppSelector((state) => state.facility.status_code)

  React.useEffect(() => {
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
  console.log('🚀 ~ JobDetails ~ values:', values)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setValue({ ...values, [name]: value })
  }
  return (
    <div className="border details-container">
      <div className="details-container__wrapper">
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Recruiter Information
        </p>
        <FormProvider {...methods}>
          <form className="form-control">
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div>
                <div>Name</div>
                <Input onChange={handleChange} name="" placeholder="Name" />
              </div>
              <div>
                <div>Job Title(Optional)</div>
                <Input name="" placeholder="Your job title" />
              </div>
              <div>
                <div>Email Address</div>
                <Input name="" placeholder="someone@gmail.com" type="email" />
              </div>
              <div>
                <div>Telephone number</div>
                <Input name="" placeholder="0342342343" type="tel" />
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

export default RecruiterInformation
