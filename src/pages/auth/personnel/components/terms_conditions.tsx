import {
  AuthContainer,
  AuthContent,
  AuthUpperContent,
} from '../../../../_shared/auth_styles'
import { Toast, GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { LoadingButton } from '@mui/lab'
import usePersonnelSignup from '../hook/usePersonnelSignup'
import { FormProvider } from 'react-hook-form'
import { PersonnelCreateAccount } from '../../_types'
import { FormEvent } from 'react'

const PersonnelTermsAndConditions = ({
  userData,
}: {
  userData: PersonnelCreateAccount
}) => {
  const { methods, onSubmit, mutation, error } = usePersonnelSignup()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent the default form submission behavior
    onSubmit(userData)
  }

  return (
    <>
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent onSubmit={handleSubmit}>
            <AuthUpperContent>
              <h1>Agree to our terms and Conditions</h1>
            </AuthUpperContent>
            {mutation.isLoading ? (
              <LoadingButton
                loading
                sx={{
                  backgroundColor: colors.button.pineGreen,
                  width: '100%',
                  ':hover': {
                    backgroundColor: colors.button.antiflashWhite,
                    color: colors.text.pineGreen,
                  },
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
      </AuthContainer>
    </>
  )
}

export default PersonnelTermsAndConditions
