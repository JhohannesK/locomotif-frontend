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
import { GenericButton, GenericSelect, Toast } from '../../../../_shared'
import useProfileSetup from '../hook/useProfileSetup'
import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Constants from '../../../../utils/constants'
import { SelectBox } from '../../facility/styles'

const ProfileSetup = () => {
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
              <AuthFieldsLabel>Specialities</AuthFieldsLabel>
              <SelectBox>
                <GenericSelect
                  name="specialities"
                  label={'Specialities'}
                  data={['Gynaecology', 'Optomology', 'Dentistry']}
                  defaultValue=""
                  multiple
                  sx={{ minWidth: '30%', width: 'fit-content' }}
                />
              </SelectBox>
              <AuthFieldsLabel>Year of Registration</AuthFieldsLabel>
              <GeneralInput
                name="registrationyear"
                type="number"
                placeholder="2023"
              />
              <AuthFieldsLabel>Telephone</AuthFieldsLabel>
              <GeneralInput
                name="telephone"
                type="tel"
                placeholder="024-123-9876"
                InputProps={{
                  inputProps: {
                    pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
                  },
                }}
              />
              <AuthFieldsLabel>Date of Birth</AuthFieldsLabel>
              <GeneralInput
                name="date_of_birth"
                type="date"
                InputProps={{
                  min: `${new Date().getFullYear() - 70}-01-01`,
                  max: new Date().toJSON().split('T')[0],
                }}
                placeholder="01-01-1900"
              />
              <AuthFieldsLabel>Location</AuthFieldsLabel>
              <SelectBox>
                <GenericSelect
                  name="country"
                  label={'Country'}
                  data={['Ghana', 'The UK']}
                  defaultValue=""
                  sx={{ width: '30%' }}
                />
                <GenericSelect
                  name="region"
                  label={'Region'}
                  data={['Greater Accra', 'Ashanti']}
                  defaultValue=""
                  sx={{ width: '30%' }}
                />
                <GenericSelect
                  name="city"
                  label={'City'}
                  data={['Accra', 'Kumasi']}
                  defaultValue=""
                  sx={{ width: '30%' }}
                />
              </SelectBox>
              <AuthFieldsLabel>Digital Address</AuthFieldsLabel>
              <GeneralInput
                name="digital_address"
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
            </StepNavigateButtons>
          </AuthContent>
        </FormProvider>
      </AuthContainer>
    </>
  )
}

export default ProfileSetup
