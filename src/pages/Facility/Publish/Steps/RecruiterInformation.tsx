import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { GenericButton, Input } from '../../../../_shared'
import { colors } from '../../../../colors'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'

const RecruiterInformation = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
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
                <Input name="" placeholder="Name" />
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

export default RecruiterInformation
