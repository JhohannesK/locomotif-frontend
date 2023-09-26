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
} from './styles'
import useSignIn from './hook/useSginIn'
import { LoadingButton } from '@mui/lab'
import { colors } from '../../../colors'
// import { genCode } from "../../../utils/genCode";
import googleLogo from '../../../_shared/assets/google_logo.png'
import { AuthButtonH3 } from '../../../_shared/auth_styles'
import routes from '../../../routes'
import Constants from '../../../utils/constants'

const SignIn = () => {
  // const {methods,error,errorMessage,isError,isLoading,onSubmit} = useSignIn();
  const { methods, errorMessage, isError, isLoading } = useSignIn()
  return (
    <>
      {isError && <Toast open={isError} type="error" children={errorMessage} />}
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
            <InputBoxes>
              <InputBoxLabels>Email Address</InputBoxLabels>
              <GenericInput
                name="email"
                label=""
                placeholder="e.g. kojo23@gmail.com"
              />
              <InputBoxLabels>Password</InputBoxLabels>
              <GenericInput name="password" label="" placeholder="*********" />
            </InputBoxes>
            <SignInButtons>
              {isLoading ? (
                <LoadingButton
                  loading
                  sx={{
                    backgroundColor: colors.button.pineGreen,
                    width: '100%',
                  }}
                ></LoadingButton>
              ) : (
                <GenericButton
                  onClick={() => {
                    // methods.setValue(
                    //     'email',
                    //     `test+${genCode(5)}@gmail.com`
                    //     )
                  }}
                  title="Sign In"
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
              <AuthButtonH3>OR</AuthButtonH3>
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
                  borderRadius: '12px',
                  hover: {
                    backgroundColor: '#FFF',
                    borderColor: colors.button.pineGreen,
                  },
                }}
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
          </FormProvider>
          <CreateAccount>
            <GenericButton
              variantText="outlined"
              title="Create An Account"
              sx={{
                backgroundColor: '#FFF',
                borderColor: colors.button.pineGreen,
                color: colors.background.pineGreen,
                textAlign: 'center',
                fontSize: '15px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                width: '100%',
                height: '80%',
                borderRadius: '12px',
                border: '2px solid',
              }}
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
