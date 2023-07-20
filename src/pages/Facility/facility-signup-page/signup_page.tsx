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
} from '../../../general/auth_styles'
import image from '../../../assets/doctor_sign_in.png'
import GeneralInput from '../../../general/Input'
import GeneralButton from '../../../general/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import Constants from '../../../utils/constants'
import axios, { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import routes from '../../../routes'
import { genCode } from '../../../utils/genCode'
import { OmitConfirmPassword, Schema, schema } from './_types'
import { useNavigate } from 'react-router-dom'
import { Alert } from '@mui/material'
import { useState } from 'react'
import { LoadingButton } from '@mui/lab'

interface MyResponse {
  error?: string
}

const SignUpPageIns = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string>('')

  const defaultValues: Schema = {
    facility_code: '',
    name: '',
    password: '',
    address: '',
    establishment_date: '',
    confirmPassword: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const mutation = useMutation({
    mutationFn: async (data: OmitConfirmPassword) => {
      console.log('🚀 ~ file: signup_page.tsx:46 ~ mutationFn: ~ data:', data)
      await axios.post(
        `${Constants.BaseURL}auth/signup/medical_facility/`,
        data
      )
    },
    onSuccess: () => navigate(Constants.ROUTES.facility_signin),
    onError: (error) => {
      if ((error as AxiosError).code === 'ERR_NETWORK') {
        setError('Check internet connectivity')
      } else if ((error as AxiosError).code === 'ERR_BAD_REQUEST') {
        setError(
          (error as AxiosError<MyResponse>).response?.data?.error ||
            'Unknown error'
        )
      } else if ((error as AxiosError).code === 'ERR_BAD_RESPONSE') {
        setError("It is our fault, we'll fix it soon")
      }
    },
  })

  const onSubmit = (data: Schema) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data

    mutation.mutate(rest)
  }

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

            <GeneralInput
              name="facility_code"
              label="Facility Code"
              icon={<AiOutlineUser />}
              placeholder="KBTH123"
              disabled
            />
            <GeneralInput
              name="name"
              label="Name"
              icon={<AiOutlineUser />}
              placeholder="Korle-Bu Teaching Hospital"
            />
            <GeneralInput
              name="address"
              label="Address"
              icon={<AiOutlineUser />}
              placeholder="GA-159-343"
            />
            <GeneralInput
              name="establishment_date"
              label="establishment date"
              type={'date'}
              placeholder="Establishment date"
            />
            <GeneralInput
              name="password"
              label="Password"
              type="password"
              icon={<FiKey />}
              placeholder="*********"
            />
            <GeneralInput
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
              <GeneralButton
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
