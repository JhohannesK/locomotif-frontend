import { BsBuildingLock } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import {
  AuthButton,
  AuthContainer,
  AuthContent,
  AuthFields,
  AuthLogo,
  AuthText,
  AuthLink,
  AuthUpperContent,
} from '../../../_shared/auth_styles'
import { colors } from '../../../colors'
import image from '../../../_shared/assets/doctor_sign_in.png'
import { LoadingButton } from '@mui/lab'
import { GenericButton, GenericInput } from '../../../_shared'
import Toast from '../../../_shared/components/Notifications/Toast'
import useFacilitySignIn from './hook/useFacilitySignIn'
import { FormProvider } from 'react-hook-form'
import routes from '../../../routes'
import Constants from '../../../utils/constants'

function SigninPageIns() {
  const { methods, status, isError, errorMessage, isLoading, onSubmit } =
    useFacilitySignIn()

  if (status === 'success') {
    // TODO: redirect to dashboard
    return <div>success</div>
  }

  return (
    <>
      {isError && <Toast open={isError} type="error" children={errorMessage} />}
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthUpperContent>
              <AuthLogo>
                <img
                  src={image}
                  alt="health-leaf icon"
                  style={{ height: '80%', width: '80%', objectFit: 'contain' }}
                />
              </AuthLogo>

              <h1 style={{ fontWeight: 650, fontSize: '2rem' }}>Sign In</h1>
            </AuthUpperContent>
            <div>
              <AuthFields>
                <GenericInput
                  name="facility_code"
                  sx={{ marginBottom: '20px' }}
                  label="Facility Code"
                  icon={<BsBuildingLock />}
                  placeholder="Facility Code"
                />

                <GenericInput
                  name="password"
                  sx={{ marginBottom: '20px' }}
                  label="Password"
                  icon={<FiKey />}
                  placeholder="Password"
                  type="password"
                />
              </AuthFields>
            </div>
            <AuthButton>
              {isLoading ? (
                <LoadingButton
                  loading
                  sx={{
                    backgroundColor: colors.button.pineGreen,
                    width: '100%',
                  }}
                ></LoadingButton>
              ) : (
                <GenericButton
                  sx={{
                    backgroundColor: colors.button.pineGreen,
                    width: '100%',
                  }}
                  title="Sign In"
                  size="large"
                />
              )}
            </AuthButton>
            <AuthText>
              <AuthLink
                onClick={() =>
                  routes.navigate(Constants.ROUTES.facility_signup)
                }
              >
                Sign Up{' '}
              </AuthLink>{' '}
              Forgot your password?
            </AuthText>
          </AuthContent>
        </FormProvider>
      </AuthContainer>
    </>
  )
}

export default SigninPageIns
