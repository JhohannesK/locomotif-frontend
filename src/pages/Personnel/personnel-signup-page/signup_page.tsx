import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'
import { colors } from '../../../colors'
import {
  AuthUpperContent,
  AuthContainer,
  AuthText,
  AuthButton,
  // AuthLogo,
  AuthFields,
  AuthContent,
  AuthLink,
  AuthFieldsLabel,
} from '../../../_shared/auth_styles'
// import image from '../../../_shared/assets/doctor_sign_in.png'
import { LoadingButton } from '@mui/lab'
import GeneralInput from '../../../_shared/components/inputs/Input'
import { GenericButton, Toast } from '../../../_shared'
import usePersonnelSignup from './hook/usePersonnelSignup'
import { FormProvider } from 'react-hook-form'
import routes from '../../../routes'
import Constants from '../../../utils/constants'

const SignUpPage = () => {
  const { mutation, onSubmit, methods, error } = usePersonnelSignup()

  return (
    <>
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthUpperContent>
              {/* <AuthLogo>
                <img
                  src={image}
                  alt="health-leaf icon"
                  style={{ height: '80%', width: '80%', objectFit: 'contain' }}
                />
              </AuthLogo> */}
              <h1>Sign Up</h1>
            </AuthUpperContent>
            <AuthFields>
              <AuthFieldsLabel>Username</AuthFieldsLabel>
              <GeneralInput
                name="username"
                icon={<AiOutlineUser />}
                placeholder="mardar@gmail.com"
              />
              <AuthFieldsLabel>First Name</AuthFieldsLabel>
              <GeneralInput
                name="first_name"
                icon={<AiOutlineUser />}
                placeholder="Curtis"
              />
              <AuthFieldsLabel>Last Name</AuthFieldsLabel>
              <GeneralInput
                name="last_name"
                icon={<AiOutlineUser />}
                placeholder="Jackson"
              />
              <AuthFieldsLabel>Other Name</AuthFieldsLabel>
              <GeneralInput
                name="other_names"
                icon={<AiOutlineUser />}
                placeholder="Lamptey-Odin"
              />
              <AuthFieldsLabel>Password</AuthFieldsLabel>
              <GeneralInput
                name="password"
                type="password"
                icon={<FiKey />}
                placeholder="*********"
              />
              <AuthFieldsLabel>Confirm Password</AuthFieldsLabel>
              <GeneralInput
                name="confirmPassword"
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
                  title="Sign Up"
                  size="large"
                />
              )}
            </AuthButton>
            <AuthText>
              Already have an account ?{' '}
              <AuthLink
                onClick={() =>
                  routes.navigate(Constants.ROUTES.PERSONNEL.personnel_signin)
                }
              >
                {' '}
                Sign In
              </AuthLink>
            </AuthText>
          </AuthContent>
        </FormProvider>
      </AuthContainer>
    </>
  )
}

export default SignUpPage
