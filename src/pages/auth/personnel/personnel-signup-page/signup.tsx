import { colors } from '../../../../colors'
import { LoadingButton } from '@mui/lab'
import { GenericButton, Input, Toast } from '../../../../_shared'
import usePersonnelSignup from '../hook/usePersonnelSignup'
import { FormProvider } from 'react-hook-form'
import React from 'react'
import { PersonnelCreateAccount } from '../../_types'
import PasswordInput from '../../../../_shared/components/inputs/PasswordInput'

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
    <div className="auth-container">
      {mutation.isError && (
        <Toast open={mutation.isError} type="error" children={error} />
      )}
      <div className="auth-container__wrapper">
        <FormProvider {...methods}>
          <form
            className="form-control"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div>
              <h1 className="text-4xl font-bold">Create Your Account</h1>
              <p className="text-sm opacity-60">
                Please input your details as specified below
              </p>
            </div>

            <div>
              <p>First Name</p>
              <Input name="first_name" placeholder="Curtis" />
            </div>
            <div>
              <p>Last Name</p>
              <Input name="last_name" placeholder="Jackson" />
            </div>
            <div>
              <p>Other Names</p>
              <Input name="other_names" placeholder="Lamptey-Odin" />
            </div>
            <div>
              <p>Email address</p>
              <Input name="email" placeholder="e.g. Averywilson64@gmail.com" />
            </div>
            <div>
              <p>Password</p>
              <PasswordInput name="password" placeholder="*********" />
            </div>
            <div>
              <p>Confirm Password</p>
              <PasswordInput name="confirmPassword" placeholder="*********" />
            </div>
            <div>
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
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default SignUp
