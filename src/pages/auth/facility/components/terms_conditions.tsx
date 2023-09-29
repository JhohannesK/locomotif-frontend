import { FormProvider } from 'react-hook-form'
import {
  AuthContainer,
  AuthContent,
  AuthUpperContent,
} from '../../../../_shared/auth_styles'
import { GenericButton } from '../../../../_shared'
import useFacilitySignUp from '../../../Facility/facility-signup-page/hook/useFacilitySignUp'
import { colors } from '../../../../colors'
import { UpperContentH1 } from '../styles'
import { FormEvent } from 'react'
import { LoadingButton } from '@mui/lab'

const FacilityTermsAndCondions = ({
  userData,
}: {
  userData: {
    name: string
    email: string
    password: string
  }
}) => {
  const { methods, onSubmit, mutation } = useFacilitySignUp()
  console.log(userData)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent the default form submission behavior
    onSubmit(userData)
  }
  return (
    <>
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent onSubmit={handleSubmit}>
            <AuthUpperContent>
              <UpperContentH1>Agree to our terms and Conditions</UpperContentH1>
            </AuthUpperContent>

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
                title="I Agree"
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
                  marginTop: '2rem',
                }}
                size="large"
              />
            )}
          </AuthContent>
        </FormProvider>
        {/* {mutation.isSuccess ? <div>okay okay</div> : <>oops</>} */}
      </AuthContainer>
    </>
  )
}

export default FacilityTermsAndCondions
