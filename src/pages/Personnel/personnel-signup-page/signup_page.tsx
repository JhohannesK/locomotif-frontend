import { colors } from '../../../colors'
import {
  AuthUpperContent,
  AuthContainer,
  AuthButton,
  // AuthLogo,
  AuthFields,
  AuthContent,
  AuthFieldsLabel,
} from '../../../_shared/auth_styles'
// import image from '../../../_shared/assets/doctor_sign_in.png'
import { LoadingButton } from '@mui/lab'
import GeneralInput from '../../../_shared/components/inputs/Input'
import { GenericButton, Toast } from '../../../_shared'
import usePersonnelSignup from './hook/usePersonnelSignup'
import { FormProvider } from 'react-hook-form'
// import routes from '../../../routes'
// import Constants from '../../../utils/constants'

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
              <h1>Create Your Account</h1>
              <p>Please input your details as specified below</p>
            </AuthUpperContent>
            <AuthFields>
              <AuthFieldsLabel>First Name</AuthFieldsLabel>
              <GeneralInput name="first_name" placeholder="Curtis" />
              <AuthFieldsLabel>Last Name</AuthFieldsLabel>
              <GeneralInput name="last_name" placeholder="Jackson" />
              <AuthFieldsLabel>Other Names</AuthFieldsLabel>
              <GeneralInput name="other_names" placeholder="Lamptey-Odin" />
              <AuthFieldsLabel>Email address</AuthFieldsLabel>
              <GeneralInput
                name="email"
                placeholder="e.g. Averywilson64@gmail.com"
              />
              <AuthFieldsLabel>Password</AuthFieldsLabel>
              <GeneralInput
                name="password"
                type="password"
                // icon={<FiKey />}
                placeholder="*********"
              />
              <AuthFieldsLabel>Confirm Password</AuthFieldsLabel>
              <GeneralInput
                name="confirmPassword"
                type="password"
                // icon={<FiKey />}
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
          </AuthContent>
        </FormProvider>
      </AuthContainer>
    </>
  )
}

export default SignUpPage
