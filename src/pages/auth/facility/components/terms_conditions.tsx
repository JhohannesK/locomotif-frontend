import { FormProvider } from 'react-hook-form'
import {
  AuthContainer,
  AuthContent,
  AuthUpperContent,
} from '../../../../_shared/auth_styles'
import { GenericButton, Toast } from '../../../../_shared'
import useFacilitySignUp from '../../../Facility/facility-signup-page/hook/useFacilitySignUp'
import { colors } from '../../../../colors'
import { UpperContentH1 } from '../styles'

const FacilityTermsAndCondions = () => {
  const { mutation, onSubmit, methods, error } = useFacilitySignUp()
  return (
    <>
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthUpperContent>
              <UpperContentH1>Agree to our terms and Conditions</UpperContentH1>
            </AuthUpperContent>

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
          </AuthContent>
        </FormProvider>
        {/* {mutation.isSuccess ? <div>okay okay</div> : <>oops</>} */}
      </AuthContainer>
    </>
  )
}

export default FacilityTermsAndCondions
