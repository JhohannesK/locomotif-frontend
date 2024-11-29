import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook'
import { GenericButton, Input } from '../../../../_shared'
import { colors } from '../../../../colors'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import React from 'react'
import {
  handleRecruiterContactChange,
  setStatusCodeToDef,
} from '@/redux/slices/facilitySlice'
import { updateFacilityPost } from '@/redux/slices/apis/facilityThunk'

const RecruiterInformation = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  const { status_code, publish_form_state: values } = useAppSelector(
    (state) => state.facility
  )

  React.useEffect(() => {
    if (status_code === '000') {
      dispatch(nextPage())
    }

    return () => {
      dispatch(setStatusCodeToDef())
    }
  }, [status_code, dispatch])

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
                <Input
                  value={values.recruiter_contact?.name}
                  onChange={(e) => dispatch(handleRecruiterContactChange(e))}
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <div>Job Title(Optional)</div>
                <Input
                  value={values.recruiter_contact?.title}
                  onChange={(e) => dispatch(handleRecruiterContactChange(e))}
                  name="title"
                  placeholder="Your job title"
                />
              </div>
              <div>
                <div>Email Address</div>
                <Input
                  value={values.recruiter_contact?.email}
                  onChange={(e) => dispatch(handleRecruiterContactChange(e))}
                  name="email"
                  placeholder="someone@gmail.com"
                  type="email"
                />
              </div>
              <div>
                <div>Telephone number</div>
                <Input
                  value={values.recruiter_contact?.phone_number}
                  onChange={(e) => dispatch(handleRecruiterContactChange(e))}
                  name="phone_number"
                  placeholder="0342342343"
                  type="tel"
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
                disabled={
                  !values.recruiter_contact?.name ||
                  !values.recruiter_contact?.email ||
                  !values.recruiter_contact?.phone_number ||
                  !values.recruiter_contact?.title
                }
                sx={{ width: '8rem' }}
                title="Next"
                onClick={() => {
                  dispatch(nextPage())
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
