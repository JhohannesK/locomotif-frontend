import { FormProvider } from 'react-hook-form'
import {
  AuthContainer,
  AuthContent,
  AuthFields,
  AuthFieldsLabel,
  AuthUpperContent,
  AuthUpperContentH2,
  AuthUpperContentP,
} from '../../../../_shared/auth_styles'
import {
  GenericButton,
  GenericInput,
  GenericSelect,
  Toast,
} from '../../../../_shared'
import { colors } from '../../../../colors'
import { ButtonsBox, SelectBox } from '../styles'
import useFacilityProfileSetup from '../hook/useFacilityProfileSetup'
import { ProfileSchema } from '../_types'
import { LoadingButton } from '@mui/lab'

const FacilitySetUpProfile = ({
  handleActiveState,

  userData,
}: {
  handleActiveState: (index: number) => void
  userData: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }
}) => {
  const { methods, mutation, error, onSubmit } = useFacilityProfileSetup()

  function passData(data: ProfileSchema) {
    const combinedData = {
      ...data,
      ...userData,
    }
    onSubmit(combinedData)
  }

  const handleDataSubmit = () => {
    methods.handleSubmit(passData)()
  }

  return (
    <>
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent onSubmit={(event) => event.preventDefault()}>
            <AuthUpperContent>
              <AuthUpperContentH2>Setup Your Profile</AuthUpperContentH2>
              <AuthUpperContentP>
                Please input your details as specified below
              </AuthUpperContentP>
            </AuthUpperContent>
            <AuthFields>
              <AuthFieldsLabel>Bio</AuthFieldsLabel>

              <GenericInput
                name={'bio'}
                placeholder=""
                type="multiline-input"
              />
              <AuthFieldsLabel>Location</AuthFieldsLabel>

              <SelectBox>
                <GenericSelect
                  name="country"
                  label={'Country'}
                  data={['Ghana', 'The UK']}
                  defaultValue="ama"
                  sx={{ width: '30%' }}
                />
                <GenericSelect
                  name="region"
                  label={'Region'}
                  data={['Greater Accra', 'Ashanti']}
                  defaultValue="ama"
                  sx={{ width: '30%' }}
                />
                <GenericSelect
                  name="city"
                  label={'City'}
                  data={['Accra', 'Kumasi']}
                  defaultValue="ama"
                  sx={{ width: '30%' }}
                />
              </SelectBox>
              <AuthFieldsLabel>Telephone</AuthFieldsLabel>

              <GenericInput
                name="telephone"
                label=""
                type="number"
                placeholder="e.g. 0302689167"
              />
              <AuthFieldsLabel>Digital Address</AuthFieldsLabel>

              <GenericInput
                name="digitaladdress"
                label=""
                type="text"
                placeholder="e.g. GA-492-53"
              />
            </AuthFields>
            <ButtonsBox>
              <GenericButton
                variantText="outlined"
                title="Skip"
                sx={{
                  backgroundColor: '#FFF',
                  borderColor: colors.button.pineGreen,
                  color: 'rgba(0, 0, 0, 0.60)',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '137.14%',
                  width: '100%',
                  borderRadius: '10px',
                  hover: {
                    backgroundColor: '#FFF',
                    borderColor: colors.button.pineGreen,
                  },
                }}
                size="large"
                onClick={() => handleActiveState(4)}
              />
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
                  title="Next"
                  sx={{
                    backgroundColor: colors.button.pineGreen,
                    width: '100%',
                    borderRadius: '10px',
                    color: '#F6FBFF',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '137.14%',
                  }}
                  size="large"
                  onClick={handleDataSubmit}
                />
              )}
            </ButtonsBox>
          </AuthContent>
        </FormProvider>
      </AuthContainer>
    </>
  )
}

export default FacilitySetUpProfile
