import { LoadingButton } from '@mui/lab'
import { FormProvider } from 'react-hook-form'
import {
  AuthButton,
  AuthButtonH3,
  AuthContainer,
  AuthContent,
  AuthFields,
  AuthFieldsLabel,
  AuthUpperContent,
  AuthUpperContentH2,
  AuthUpperContentP,
} from '../../../../_shared/auth_styles'
import { GenericButton, GenericInput, Toast } from '../../../../_shared'
import useFacilitySignUp from '../../../Facility/facility-signup-page/hook/useFacilitySignUp'
import { colors } from '../../../../colors'
import { genCode } from '../../../../utils/genCode'
import google_logo from '../../../../_shared/assets/google_logo.png'

const FacilityCreateAccount = () => {
  const { mutation, onSubmit, methods, error } = useFacilitySignUp()
  return (
    <>
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthUpperContent>
              <AuthUpperContentH2>Create Your Account</AuthUpperContentH2>
              <AuthUpperContentP>
                Please input your details as specified below
              </AuthUpperContentP>
            </AuthUpperContent>
            <AuthFields>
              <AuthFieldsLabel>Facility Name</AuthFieldsLabel>
              <GenericInput
                name="name"
                label=""
                placeholder="Korle-Bu Teaching Hospital"
              />
              <AuthFieldsLabel>Email Address</AuthFieldsLabel>

              <GenericInput
                name="email"
                label=""
                placeholder="e.g. korlebuteachinghospital@gmail.com"
              />
              <AuthFieldsLabel>Password</AuthFieldsLabel>

              <GenericInput
                name="password"
                label=""
                type="password"
                placeholder="*********"
              />
            </AuthFields>
            <AuthButton>
              {mutation.isLoading ? (
                <LoadingButton
                  loading
                  sx={{
                    backgroundColor: colors.button.pineGreen,
                    width: '100%',
                  }}
                ></LoadingButton>
              ) : (
                <GenericButton
                  onClick={() =>
                    methods.setValue(
                      'facility_code',
                      genCode(methods.getValues('name'))
                    )
                  }
                  title="Sign Up"
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
                  }}
                  size="large"
                />
              )}
              <AuthButtonH3>OR</AuthButtonH3>
              <GenericButton
                variantText="outlined"
                title="Continue with Google"
                sx={{
                  backgroundColor: '#FFF',
                  borderColor: colors.button.pineGreen,
                  color: 'rgba(0, 0, 0, 0.60)',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '137.14%',
                  width: '100%',
                  borderRadius: '10px',
                  hover: {
                    backgroundColor: '#FFF',
                    borderColor: colors.button.pineGreen,
                  },
                }}
                size="large"
                icon={
                  <img
                    src={google_logo}
                    alt="google icon"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                }
              />
            </AuthButton>
          </AuthContent>
        </FormProvider>
        {/* {mutation.isSuccess ? <div>okay okay</div> : <>oops</>} */}
      </AuthContainer>
    </>
  )
}

export default FacilityCreateAccount
