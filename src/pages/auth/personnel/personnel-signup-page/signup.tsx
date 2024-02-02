import { colors } from '../../../../colors'
import {
  AuthUpperContent,
  AuthContainer,
  AuthButton,
  AuthFields,
  AuthContent,
  AuthFieldsLabel,
} from '../../../../_shared/auth_styles'
import { LoadingButton } from '@mui/lab'
import GeneralInput from '../../../../_shared/components/inputs/Input'
import { GenericButton, Toast } from '../../../../_shared'
import usePersonnelSignup from '../hook/usePersonnelSignup'
import { FormProvider } from 'react-hook-form'
import React from 'react'
import { PersonnelCreateAccount } from '../../_types'

const SignUp = ({
  handleActiveState,
  handleUserData,
}: {
  handleActiveState: (index: number) => void
  handleUserData: React.Dispatch<React.SetStateAction<PersonnelCreateAccount>>
}) => {
  const { mutation, methods, error } = usePersonnelSignup()

  const onSubmit = (data: PersonnelCreateAccount) => {
    handleActiveState(2)
    handleUserData(data)
  }

  return (
    <>
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthUpperContent>
              <h1>Create Your Account</h1>
              <p>Please input your details as specified below</p>
            </AuthUpperContent>
            <AuthFields>
              <AuthFieldsLabel>First Name</AuthFieldsLabel>
              <GeneralInput name="first_name" placeholder="Curtis" />
              <AuthFieldsLabel>Last Name</AuthFieldsLabel>
              <GeneralInput name="last_name" placeholder="Jackson" />
              <AuthFieldsLabel>Other Names</AuthFieldsLabel>
              <GeneralInput name="other_names" placeholder="Lamptey-Odin" />
              <AuthFieldsLabel>Email address</AuthFieldsLabel>
              <GeneralInput
                name="email"
                placeholder="e.g. Averywilson64@gmail.com"
              />
              <AuthFieldsLabel>Password</AuthFieldsLabel>
              <GeneralInput
                name="password"
                type="password"
                // icon={<FiKey />}
                placeholder="*********"
              />
              <AuthFieldsLabel>Confirm Password</AuthFieldsLabel>
              <GeneralInput
                name="confirmPassword"
                type="password"
                // icon={<FiKey />}
                placeholder="*********"
                sx={{ marginBottom: '20px' }}
              />
            </AuthFields>

            <AuthButton>
              {mutation.isPending ? (
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
                  sx={{
                    backgroundColor: colors.button.pineGreen,
                    width: '100%',
                    ':hover': {
                      backgroundColor: colors.button.antiflashWhite,
                      color: colors.text.pineGreen,
                    },
                  }}
                  title="Sign Up"
                  size="large"
                />
              )}
            </AuthButton>
          </AuthContent>
        </FormProvider>
      </AuthContainer>
    </>
  )
}

export default SignUp
