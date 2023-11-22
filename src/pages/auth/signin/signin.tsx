import { FormProvider } from 'react-hook-form'
import { GenericButton, GenericInput, Toast } from '../../../_shared'
import {
  Content,
  CreateAccount,
  InputBoxLabels,
  InputBoxes,
  Instructions,
  Logo,
  Page,
  SignInButtons,
  Welcome,
  WelcomeBack,
  createAccountProps,
  googleSignInProps,
  signInProps,
} from './styles'
import useSignIn, { PersonnelLoginSchema } from './hook/useSignIn'
import { LoadingButton } from '@mui/lab'
import { colors } from '../../../colors'
import googleLogo from '../../../_shared/assets/google_logo.png'
import { AuthButtonH3 } from '../../../_shared/auth_styles'
import routes from '../../../routes'
import Constants from '../../../utils/constants'
import { fetchPersonnelProfile, login } from '../slice/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../../../redux/store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const SignIn = () => {
  const { methods } = useSignIn()
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>()
  const { isLoading, isLoggedIn, user_role, errorMessage } = useSelector(
    (state: RootState) => state.auth
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      if (user_role.user_role == Constants.PERSONNEL) {
        navigate(Constants.ROUTES.PERSONNEL.personnel_dashboard)
      }
    }
  }, [isLoggedIn, user_role, navigate])

  const onSubmit = (data: PersonnelLoginSchema) => {
    dispatch(login(data))
    dispatch(fetchPersonnelProfile())
  }
  return (
    <>
      {errorMessage && (
        <Toast open={!!errorMessage} type="error" children={errorMessage} />
      )}

      <Page>
        <Content>
          <Logo>Loco</Logo>
          <Welcome>
            <WelcomeBack>Welcome Back!</WelcomeBack>
            <Instructions>
              Please input your log in details as specified below
            </Instructions>
          </Welcome>
          <FormProvider {...methods}>
            <InputBoxes onSubmit={methods.handleSubmit(onSubmit)}>
              <InputBoxLabels>Email Address</InputBoxLabels>
              <GenericInput
                name="email"
                label=""
                placeholder="e.g. kojo23@gmail.com"
              />
              <InputBoxLabels>Password</InputBoxLabels>
              <GenericInput
                name="password"
                label=""
                placeholder="*********"
                type="password"
              />
              {isLoading ? (
                <LoadingButton
                  loading
                  sx={{
                    backgroundColor: colors.button.pineGreen,
                    width: '100%',
                  }}
                ></LoadingButton>
              ) : (
                <GenericButton title="Sign In" sx={signInProps} size="large" />
              )}
            </InputBoxes>
          </FormProvider>
          <SignInButtons>
            <AuthButtonH3>OR</AuthButtonH3>
            <GenericButton
              variantText="outlined"
              title="Continue with Google"
              sx={googleSignInProps}
              size="large"
              icon={
                <img
                  src={googleLogo}
                  alt="google icon"
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
              }
            />
          </SignInButtons>
          <CreateAccount>
            <GenericButton
              variantText="outlined"
              title="Create An Account"
              sx={createAccountProps}
              onClick={() => {
                routes.navigate(Constants.ROUTES.GetStarted)
              }}
            />
          </CreateAccount>
        </Content>
      </Page>
    </>
  )
}

export default SignIn
