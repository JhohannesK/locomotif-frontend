import { colors } from '../../../../colors'
import {
  AuthUpperContent,
  AuthContainer,
  StepNavigateButtons,
  AuthFields,
  AuthContent,
  AuthFieldsLabel,
} from '../../../../_shared/auth_styles'
import GeneralInput from '../../../../_shared/components/inputs/Input'
import { GenericButton, Toast, GenericSelect } from '../../../../_shared'
import useProfileSetup from '../hook/useProfileSetup'
import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Constants from '../../../../utils/constants'
import { SelectBox } from '../../facility/styles'

const SignUp = () => {
  const { mutation, onSubmit, methods, error } = useProfileSetup()
  const navigate = useNavigate()

  return (
    <>
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthUpperContent>
              <h1>Set Up Your Profile</h1>
            </AuthUpperContent>
            <AuthFields>
              <AuthFieldsLabel>Specialty</AuthFieldsLabel>
              <GeneralInput name="specialty" placeholder="e.g: Neurosurgery" />
              <AuthFieldsLabel>Year of Registration</AuthFieldsLabel>
              <GeneralInput
                name="registrationyear"
                type="number"
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
                placeholder="Jackson"
              />
              <AuthFieldsLabel>Location</AuthFieldsLabel>
              <SelectBox>
                <GenericSelect
                  label={'Country'}
                  data={['Ghana', 'The UK']}
                  defaultValue="ama"
                  sx={{ width: '30%' }}
                />
                <GenericSelect
                  label={'Region'}
                  data={['Greater Accra', 'Ashanti']}
                  defaultValue="ama"
                  sx={{ width: '30%' }}
                />
                <GenericSelect
                  label={'City'}
                  data={['Accra', 'Kumasi']}
                  defaultValue="ama"
                  sx={{ width: '30%' }}
                />
              </SelectBox>
              <AuthFieldsLabel>Digital Address</AuthFieldsLabel>
              <GeneralInput
                name="digitaladdress"
                placeholder="e.g: GA-123-9876"
              />
            </AuthFields>

            <StepNavigateButtons>
              <GenericButton
                onClick={() =>
                  navigate(Constants.ROUTES.PERSONNEL.personnel_dashboard)
                }
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

export default SignUp
