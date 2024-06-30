import { FormProvider } from 'react-hook-form'
import { GenericButton, Input } from '@/_shared'
import useFacilitySignUp from '../hook/useFacilitySignUp'
import { colors } from '@/colors'
import google_logo from '@/_shared/assets/google_logo.png'
import PasswordInput from '@/_shared/components/inputs/PasswordInput'
import { FormControlLabel } from '@mui/material'
import LocoCheckbox from '@/_shared/components/Checkbox'

const FacilityCreateAccount = ({
  handleActiveState,
  handleUserData,
}: {
  handleActiveState: (index: number) => void
  handleUserData: (userData: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }) => void
}) => {
  const { methods, onSubmit } = useFacilitySignUp()
  console.log('🚀 ~ methods:', methods.watch())

  const onsubmit = (data: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }) => {
    handleActiveState(2)
    handleUserData(data)
  }

  console.log('🚀 ~ onsubmit:', onsubmit)
  return (
    <div className="auth-container">
      <div className="auth-container__wrapper">
        <FormProvider {...methods}>
          <form
            className="form-control"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="text-3xl font-bold">Create Your Account</div>
              <div>Please input your details as specified below</div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <div>Facility Name</div>
                <Input
                  {...methods.register('name', { required: true })}
                  placeholder="Korle-Bu Teaching Hospital"
                />
              </div>
              {/* <div>
                <div>Mobile Number</div>
                <Input
                  // {...methods.register('phone')}
                  name="phone"
                  type="tel"
                  placeholder="+233 345 2353 5"
                />
              </div> */}
              <div>
                <div>Email Address</div>
                <Input
                  {...methods.register('email', { required: true })}
                  type="email"
                  placeholder="e.g. korlebuteachinghospital@gmail.com"
                />
              </div>
              <div>
                <div>Password</div>
                <PasswordInput
                  {...methods.register('password', { required: true })}
                  placeholder="*********"
                />
              </div>
              <div>
                <div>Confirm Password</div>
                <PasswordInput
                  {...methods.register('confirmPassword', { required: true })}
                  placeholder="*********"
                />
              </div>
            </div>
            <div>
              <FormControlLabel
                control={<LocoCheckbox name="check" />}
                label="Agree to the terms and conditions."
              />
            </div>
            <div className="flex flex-col gap-4">
              <GenericButton
                title="Sign Up"
                disabled={methods.getValues().check === false}
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
                  ':hover': {
                    backgroundColor: colors.button.pineGreen,
                  },
                }}
                size="large"
                type="submit"
              />
              <div className="w-full flex items-center justify-center gap-1">
                <div className="w-full h-[1px] bg-zinc-400"></div>
                <p className="font-bold">OR</p>
                <div className="w-full h-[1px] bg-zinc-400"></div>
              </div>
              <GenericButton
                variantText="outlined"
                title="Continue with Google"
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
                  },
                  pointerEvents: 'none', //Disables button
                }}
                size="large"
                icon={
                  <img
                    src={google_logo}
                    alt="google icon"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                }
              />
            </div>
          </form>
        </FormProvider>
        {/* {mutation.isSuccess ? <div>okay okay</div> : <>oops</>} */}
      </div>
    </div>
  )
}

export default FacilityCreateAccount
