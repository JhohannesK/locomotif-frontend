import { FormProvider } from 'react-hook-form'
import {
  CountrySelect,
  GenericButton,
  GenericInput,
  Input,
  LocoSelect,
  Toast,
} from '@/_shared'
import { colors } from '@/colors'
import useFacilityProfileSetup from '../hook/useFacilityProfileSetup'
import { LoadingButton } from '@mui/lab'
import { ProfileSchema } from '../schema/validation'

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

  return (
    <div className="auth-container">
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}

      <div className="auth-container__wrapper">
        <FormProvider {...methods}>
          <form
            className="form-control"
            onSubmit={methods.handleSubmit(passData)}
          >
            <div>
              <p className="text-3xl font-bold">Setup Your Profile</p>
              <p className="text-sm opacity-60">
                Please input your details as specified below
              </p>
            </div>
            <div>
              <div>Bio</div>
              <GenericInput
                name="bio"
                placeholder="Let the world know about your facility"
              />
            </div>
            <div>
              <div>Location</div>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <CountrySelect name="country" />
                <LocoSelect
                  name="region"
                  options={['Greater Accra', 'Ashanti']}
                  placeholder="Region"
                  defaultOption=""
                />
                <LocoSelect
                  name="city"
                  options={['Accra', 'Kumasi']}
                  defaultOption=""
                  placeholder="City"
                />
              </div>
            </div>
            <div>
              <div>Telephone</div>
              <Input
                name="telephone"
                type="tell"
                placeholder="e.g. 0302689167"
              />
            </div>
            <div>
              <div>Digital Address</div>
              <Input
                name="digitaladdress"
                type="text"
                placeholder="e.g. GA-492-53"
              />
            </div>
            <div className="flex gap-4">
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
                  ':hover': {
                    backgroundColor: '#FFF',
                    borderColor: colors.button.pineGreen,
                  },
                }}
                size="large"
                onClick={() => handleActiveState(4)}
              />
              {mutation.isPending ? (
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
                />
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default FacilitySetUpProfile
