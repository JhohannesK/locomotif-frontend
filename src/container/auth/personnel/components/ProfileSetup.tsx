import { colors } from '../../../../colors'
import {
  CountrySelect,
  GenericButton,
  Input,
  LocoSelect,
  Toast,
} from '../../../../_shared'
import useProfileSetup from '../hook/useProfileSetup'
import { FormProvider } from 'react-hook-form'
import {
  IPersonnelProfileData,
  PersonnelCreateAccount,
  IPersonnelProfilePayload,
} from '../../types'

const ProfileSetup = ({
  handleActiveState,
  userData,
}: {
  handleActiveState: (index: number) => void
  userData: PersonnelCreateAccount
}) => {
  const { mutation, onSubmit, methods, error, fetchSpecialitiesMutation } =
    useProfileSetup()

  function passData(data: IPersonnelProfilePayload) {
    const combinedData: IPersonnelProfileData = {
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
              <h1 className="font-bold text-4xl">Set Up Your Profile</h1>
              <p className="text-sm opacity-60">
                Please input your details as specified below
              </p>
            </div>
            <div>
              <p>Specialities</p>
              <LocoSelect
                name="specialities"
                placeholder={'Specialities'}
                options={fetchSpecialitiesMutation.data?.specialities ?? [' ']}
                defaultOption=""
                // multiple
              />
            </div>
            <div>
              <p>Year of Registration</p>
              <Input
                name="year_of_registration"
                type="number"
                placeholder="2023"
              />
            </div>
            <div>
              <p>Telephone</p>
              <Input
                name="telephone"
                type="tel"
                placeholder="024-123-9876"
                // InputProps={{
                //   inputProps: {
                //     pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
                //   },
                // }}
              />
            </div>
            <div>
              <p>Date of Birth</p>
              <Input
                name="date_of_birth"
                type="date"
                // InputProps={{
                //   min: `${new Date().getFullYear() - 70}-01-01`,
                //   max: new Date().toJSON().split('T')[0],
                // }}
                placeholder="01-01-1900"
              />
            </div>
            <div>
              <p>Location</p>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <CountrySelect name="country" />
                <LocoSelect
                  name="region"
                  placeholder={'Region'}
                  options={['Greater Accra', 'Ashanti']}
                  defaultOption=""
                />
                <LocoSelect
                  name="city"
                  placeholder={'City'}
                  options={['Accra', 'Kumasi']}
                  defaultOption=""
                />
              </div>
            </div>
            <div>
              <p>Digital Address</p>
              <Input name="digital_address" placeholder="e.g: GA-123-9876" />
            </div>
            <div className="flex items-center gap-4">
              <GenericButton
                onClick={() => handleActiveState(4)}
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
                title="Continue"
                size="medium"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default ProfileSetup
