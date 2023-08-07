import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'
import { colors } from '../../../colors'
import {
  AuthContainer,
  AuthContent,
  AuthUpperContent,
  AuthFields,
  AuthText,
  AuthLogo,
  AuthButton,
  AuthLink,
} from '../../../_shared/auth_styles'
import image from '../../../_shared/assets/doctor_sign_in.png'
import Constants from '../../../utils/constants'
import routes from '../../../routes'
import { genCode } from '../../../utils/genCode'
import { Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { GenericButton, GenericInput } from '../../../_shared'
import useFacilitySignUp from './useFacilitySignUp'
import { FormProvider } from 'react-hook-form'

const SignUpPageIns = () => {
  const { mutation, onSubmit, methods, error } = useFacilitySignUp()
  return (
    <AuthContainer>
      <FormProvider {...methods}>
        <AuthContent onSubmit={methods.handleSubmit(onSubmit)}>
          <AuthUpperContent>
            <AuthLogo>
              <img
                src={image}
                alt="health-leaf icon"
                style={{ height: '80%', width: '80%', objectFit: 'contain' }}
              />
            </AuthLogo>

            <h1 style={{ fontWeight: 650, fontSize: '2rem' }}>Sign Up</h1>
          </AuthUpperContent>
          <AuthFields>
            {mutation.isError ? <Alert severity="error">{error}</Alert> : null}

            <GenericInput
              name="facility_code"
              label="Facility Code"
              icon={<AiOutlineUser />}
              placeholder="KBTH123"
              disabled
            />
            <GenericInput
              name="name"
              label="Name"
              icon={<AiOutlineUser />}
              placeholder="Korle-Bu Teaching Hospital"
            />
            <GenericInput
              name="address"
              label="Address"
              icon={<AiOutlineUser />}
              placeholder="GA-159-343"
            />
            <GenericInput
              name="establishment_date"
              label="establishment date"
              type={'date'}
              placeholder="Establishment date"
            />
            <GenericInput
              name="password"
              label="Password"
              type="password"
              icon={<FiKey />}
              placeholder="*********"
            />
            <GenericInput
              name="confirmPassword"
              label="Confirm Password"
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
                sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
              ></LoadingButton>
            ) : (
              <GenericButton
                onClick={() =>
                  methods.setValue(
                    'facility_code',
                    genCode(methods.getValues('name'))
                  )
                }
                title="Sign Up"
                sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
                size="large"
              />
            )}
          </AuthButton>
          <AuthText>
            Already have an account?{' '}
            <AuthLink
              onClick={() => {
                routes.navigate(Constants.ROUTES.facility_signin)
              }}
            >
              Sign In
            </AuthLink>
          </AuthText>
        </AuthContent>
      </FormProvider>
      {/* {mutation.isSuccess ? <div>okay okay</div> : <>oops</>} */}
    </AuthContainer>
  )
}

export default SignUpPageIns
