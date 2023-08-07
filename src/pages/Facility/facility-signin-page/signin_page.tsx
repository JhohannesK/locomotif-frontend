import { BsBuildingLock } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import {
  AuthButton,
  AuthContainer,
  AuthContent,
  AuthFields,
  AuthLogo,
  AuthText,
  AuthUpperContent,
} from '../../../_shared/auth_styles'
import { colors } from '../../../colors'
import image from '../../../_shared/assets/doctor_sign_in.png'
import { Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { GenericButton, GenericInput } from '../../../_shared'
import Toast from '../../../_shared/components/Notifications/Toast'
import useFacilitySignIn from './hook/useFacilitySignIn'
import { FormProvider } from 'react-hook-form'

function SigninPageIns() {
  const {
    methods,
    status,
    isError,
    isLoading,
    error,
    toast,
    showToast,
    onSubmit,
  } = useFacilitySignIn()

  if (status === 'success') {
    // TODO: redirect to dashboard
    return <div>success</div>
  }

  return (
    <>
      <Toast {...toast} showToast={showToast}>
        How are you today
      </Toast>
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
                {isError ? <Alert severity="error">{error}</Alert> : null}
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
            <AuthText>
              <p>Forgot your password?</p>
            </AuthText>
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
          </AuthContent>
        </FormProvider>
      </AuthContainer>
    </>
  )
}

export default SigninPageIns
