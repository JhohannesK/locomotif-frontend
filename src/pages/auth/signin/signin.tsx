import { FormProvider } from 'react-hook-form'
import { GenericButton, Input, Toast } from '../../../_shared'
import useSignIn, { PersonnelLoginSchema } from './hook/useSignIn'
import { colors } from '../../../colors'
import googleLogo from '../../../_shared/assets/google_logo.png'
import routes from '../../../routes'
import Constants from '../../../utils/constants'
import { login } from '../slice/authSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { LoadingButton } from '@mui/lab'
import PasswordInput from '../../../_shared/components/inputs/PasswordInput'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook'

const SignIn = () => {
  const { methods } = useSignIn()
  const dispatch = useAppDispatch()
  const { isLoading, isLoggedIn, user_role, errorMessage } = useAppSelector(
    (state) => state.auth
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      if (user_role.user_role == Constants.PERSONNEL) {
        navigate(Constants.ROUTES.PAGES.PERSONNEL.personnel_findJob)
      }
    }
  }, [isLoggedIn, user_role, navigate])

  const onSubmit = (data: PersonnelLoginSchema) => {
    dispatch(login(data))
  }
  return (
    <>
      {errorMessage && (
        <Toast open={!!errorMessage} type="error" children={errorMessage} />
      )}
      <div className="h-screen w-full flex-col dark:bg-black bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.07] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-3xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-background-primary py-8">
          Loco
        </p>
        <div className="flex flex-col bg-white py-10 px-10 rounded-full">
          <div className="flex flex-col gap-6 items-center justify-center xl:w-[30rem]">
            {/* <p>Loco</p> */}
            <div className="flex items-center justify-center flex-col">
              <p className="font-bold text-3xl">Welcome To Locomotif!</p>
              <p className="opacity-60">
                Please input your log in details as specified below
              </p>
            </div>
            <FormProvider {...methods}>
              <form
                className="flex flex-col gap-5 w-full"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <div className="w-full flex flex-col gap-2">
                  <p>Email Address</p>
                  <Input name="email" placeholder="Your email address" />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p>Password</p>
                  <PasswordInput
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                {isLoading ? (
                  <LoadingButton
                    loading
                    sx={{
                      backgroundColor: colors.button.pineGreen,
                      width: '100%',
                      height: '50px',
                    }}
                  ></LoadingButton>
                ) : (
                  <GenericButton
                    title="Sign In"
                    sx={{ width: '100%' }}
                    size="large"
                  />
                )}
              </form>
            </FormProvider>
            <div className="w-full">
              <div className="w-full flex items-center justify-center gap-1 pb-6">
                <div className="w-full h-[1px] bg-zinc-400"></div>
                <p className="font-bold">OR</p>
                <div className="w-full h-[1px] bg-zinc-400"></div>
              </div>
              <GenericButton
                variantText="outlined"
                title="Continue with Google"
                sx={{ width: '100%' }}
                size="large"
                icon={
                  <img
                    src={googleLogo}
                    alt="google icon"
                    style={{
                      height: '1rem',
                      width: '1rem',
                      objectFit: 'cover',
                    }}
                  />
                }
              />
            </div>
            <div className="w-full">
              <GenericButton
                variantText="outlined"
                title="Create An Account"
                sx={{ width: '100%' }}
                onClick={() => {
                  routes.navigate(Constants.ROUTES.GetStarted)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
