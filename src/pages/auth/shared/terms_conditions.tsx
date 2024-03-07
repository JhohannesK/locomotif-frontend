import { FormProvider } from 'react-hook-form'
import { GenericButton, Toast } from '../../../_shared'
import useFacilitySignUp from '../facility/hook/useFacilitySignUp'
import { colors } from '../../../colors'
import { FormEvent } from 'react'
import { LoadingButton } from '@mui/lab'

const TermsAndConditions = () => {
  const { methods, onSubmit, mutation, error } = useFacilitySignUp()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent the default form submission behavior
    onSubmit({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }
  return (
    <div className="auth-container">
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}
      <div className="auth-container__wrapper">
        <FormProvider {...methods}>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="w-full">
              <p className="text-center font-bold text-3xl">
                Agree to our terms and Conditions
              </p>
            </div>

            {mutation.isPending ? (
              <LoadingButton
                loading
                sx={{
                  backgroundColor: colors.button.pineGreen,
                  width: '100%',
                }}
              ></LoadingButton>
            ) : (
              <GenericButton
                title="I Agree"
                sx={{
                  backgroundColor: colors.button.pineGreen,
                  width: '100%',
                  borderRadius: '10px',
                  color: '#F6FBFF',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '137.14%',
                  marginTop: '2rem',
                }}
                size="large"
              />
            )}
          </form>
        </FormProvider>
        {/* {mutation.isSuccess ? <div>okay okay</div> : <>oops</>} */}
      </div>
    </div>
  )
}

export default TermsAndConditions
