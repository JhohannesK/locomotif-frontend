import { AiFillCalendar } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { colors } from '../../../../colors'
import {
  AuthUpperContent,
  AuthContainer,
  StepNavigateButtons,
  AuthFields,
  AuthContent,
  AuthFieldsLabel,
} from '../../../../_shared/auth_styles'
// import image from '../../../_shared/assets/doctor_sign_in.png'
// import { LoadingButton } from '@mui/lab'
import GeneralInput from '../../../../_shared/components/inputs/Input'
import { GenericButton, Toast } from '../../../../_shared'
import usePersonnelSignup from '../../../Personnel/personnel-signup-page/hook/usePersonnelSignup'
import { FormProvider } from 'react-hook-form'
// import routes from '../../../../routes'
// import Constants from '../../../../utils/constants'
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
              <AuthFieldsLabel>Specialty</AuthFieldsLabel>
              <GeneralInput
                name="specialty"
                // icon={<AiOutlineUser />}
                placeholder="e.g: Neurosurgery"
              />
              <AuthFieldsLabel>Year of Registration</AuthFieldsLabel>
              <GeneralInput
                name="registrationyear"
                type="number"
                icon={<AiFillCalendar />}
                placeholder="2023"
              />
              <AuthFieldsLabel>Date of Birth</AuthFieldsLabel>
              <GeneralInput
                name="DoB"
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
              <AuthFieldsLabel>Location</AuthFieldsLabel>
              <GeneralInput
                name="location"
                icon={<FiMapPin />}
                placeholder="Lartebiokorshie"
              />
              <AuthFieldsLabel>Digital Address</AuthFieldsLabel>
              <GeneralInput
                name="digitaladdress"
                icon={<FiMapPin />}
                placeholder="e.g: GA-123-9876"
              />
            </AuthFields>

            <StepNavigateButtons>
              <GenericButton
                sx={{
                  backgroundColor: colors.button.white,
                  color: colors.text.pineGreen,
                  width: '100%',
                  // border:`2px solid ${colors.border.pineGreen}`,
                  borderRadius: '10px',
                }}
                title="Skip"
                size="medium"
                variantText="outlined"
              />
              <GenericButton
                sx={{
                  backgroundColor: colors.button.pineGreen,
                  width: '100%',
                  borderRadius: '10px',
                }}
                title="Next"
                size="medium"
              />
              {/* {mutation.isLoading ? (
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
              )} */}
            </StepNavigateButtons>
          </AuthContent>
        </FormProvider>
      </AuthContainer>
    </>
  )
}

export default SignUpPage
