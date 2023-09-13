import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'
import { colors } from '../../../colors'
import {
  AuthUpperContent,
  AuthContainer,
  AuthText,
  AuthButton,
  AuthLogo,
  AuthFields,
  AuthContent,
  AuthLink,
} from '../../../_shared/auth_styles'
import image from '../../../_shared/assets/doctor_sign_in.png'
import { Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import GeneralInput from '../../../_shared/components/inputs/Input'
import { GenericButton } from '../../../_shared'
import usePersonnelSignup from './hook/usePersonnelSignup'
import { FormProvider } from 'react-hook-form'
import routes from '../../../routes'
import Constants from '../../../utils/constants'

const SignUpPage = () => {
  const { mutation, onSubmit, methods, error } = usePersonnelSignup()
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
            <h1>Sign Up</h1>
          </AuthUpperContent>
          <AuthFields>
            {mutation.isError ? <Alert severity="error">{error}</Alert> : null}

            <GeneralInput
              name="username"
              label="Username"
              icon={<AiOutlineUser />}
              placeholder="mardar@gmail.com"
            />
            <GeneralInput
              name="first_name"
              label="First Name"
              icon={<AiOutlineUser />}
              placeholder="Curtis"
            />
            <GeneralInput
              name="last_name"
              label="Last Name"
              icon={<AiOutlineUser />}
              placeholder="Jackson"
            />
            <GeneralInput
              name="other_names"
              label="Other names"
              icon={<AiOutlineUser />}
              placeholder="Lamptey-Odin"
            />
            <GeneralInput
              name="password"
              label="Password"
              type="password"
              icon={<FiKey />}
              placeholder="*********"
            />
            <GeneralInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              icon={<FiKey />}
              placeholder="*********"
              sx={{ marginBottom: '20px' }}
            />
          </AuthFields>

          <AuthButton>
            {mutation.isLoading ? (
              <LoadingButton
                loading
                sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
              ></LoadingButton>
            ) : (
              <GenericButton
                sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
                title="Sign Up"
                size="large"
              />
            )}
          </AuthButton>
          <AuthText>
            Already have an account ?{' '}
            <AuthLink
              onClick={() => routes.navigate(Constants.ROUTES.personnel_signin)}
            >
              {' '}
              Sign In
            </AuthLink>
          </AuthText>
        </AuthContent>
      </FormProvider>
    </AuthContainer>
  )
}

export default SignUpPage
