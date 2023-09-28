import { AiFillCalendar } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { colors } from '../../../colors'
import {
  AuthUpperContent,
  AuthContainer,
  AuthText,
  AuthButton,
  //   AuthLogo,
  AuthFields,
  AuthContent,
  AuthLink,
} from '../../../_shared/auth_styles'
// import image from '../../../_shared/assets/doctor_sign_in.png'
import { LoadingButton } from '@mui/lab'
import GeneralInput from '../../../_shared/components/inputs/Input'
import { GenericButton, Toast } from '../../../_shared'
import usePersonnelSignup from './hook/usePersonnelSignup'
import { FormProvider } from 'react-hook-form'
import routes from '../../../routes'
import Constants from '../../../utils/constants'
// import { BiMap } from 'react-icons/bi'

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
              <h1>Set Up Your Profile</h1>
            </AuthUpperContent>
            <AuthFields>
              <GeneralInput
                name="specialty"
                label="Specialty"
                // icon={<AiOutlineUser />}
                placeholder="e.g: Neurosurgery"
              />
              <GeneralInput
                name="registrationyear"
                label="Year of Registration"
                type="number"
                icon={<AiFillCalendar />}
                placeholder="2023"
              />
              <GeneralInput
                name="DoB"
                label="Date of Birth"
                type="date"
                InputProps={{
                  inputProps: {
                    min: `${new Date().getFullYear() - 70}-01-01`,
                    max: new Date().toJSON().split('T')[0],
                  },
                }}
                icon={<AiFillCalendar />}
                placeholder="Jackson"
              />
              <GeneralInput
                name="location"
                label="Location"
                icon={<FiMapPin />}
                placeholder="Lartebiokorshie"
              />
              <GeneralInput
                name="digitaladdress"
                label="Digital Address"
                icon={<FiMapPin />}
                placeholder="e.g: GA-123-9876"
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
