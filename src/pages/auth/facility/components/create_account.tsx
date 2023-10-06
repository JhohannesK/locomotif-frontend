// import { LoadingButton } from '@mui/lab'
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
import { GenericButton, GenericInput } from '../../../../_shared'
import useFacilitySignUp from '../hook/useFacilitySignUp'
import { colors } from '../../../../colors'
import google_logo from '../../../../_shared/assets/google_logo.png'

const FacilityCreateAccount = ({
  handleActiveState,
  handleUserData,
}: {
  handleActiveState: (index: number) => void
  handleUserData: (userData: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }) => void
}) => {
  const { methods } = useFacilitySignUp()

  const onSubmit = (data: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }) => {
    handleActiveState(2)
    handleUserData(data)
  }

  return (
    <>
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent>
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

              <AuthFieldsLabel>Confirm Password</AuthFieldsLabel>
              <GenericInput
                name="confirmPassword"
                label=""
                type="password"
                placeholder="*********"
              />
            </AuthFields>
            <AuthButton>
              <GenericButton
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
                onClick={methods.handleSubmit(onSubmit)}
              />
              {/* )} */}
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
