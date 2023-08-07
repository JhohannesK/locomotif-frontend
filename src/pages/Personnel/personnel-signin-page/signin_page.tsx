import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'
import { colors } from '../../../colors'
import image from '../../../_shared/assets/doctor_sign_in.png'
import {
  AuthButton,
  AuthContainer,
  AuthContent,
  AuthFields,
  AuthLogo,
  AuthText,
  AuthUpperContent,
} from '../../../_shared/auth_styles'
import { FormProvider } from 'react-hook-form'
import { Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { GenericInput } from '../../../_shared'
import GeneralButton from '../../../_shared/components/button/Button'
import useSignIn from './hook/useSignIn'
import { AxiosError } from 'axios'

function SigninPage() {
  const { methods, onSubmit, errorMessage, isError, error, isLoading } =
    useSignIn()

  return (
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
              {isError && (error as AxiosError)?.code !== 'ERR_NETWORK' ? (
                <Alert severity="error">{errorMessage}</Alert>
              ) : null}
              <GenericInput
                name="username"
                sx={{ marginBottom: '20px' }}
                label="Username"
                icon={<AiOutlineUser />}
                placeholder="Username"
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
          <AuthText>Forgot your password?</AuthText>
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
              <GeneralButton
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
  )
}

export default SigninPage
