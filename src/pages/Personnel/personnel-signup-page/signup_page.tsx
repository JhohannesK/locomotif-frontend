import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'
import GeneralInput from '../../../general/Input'
import GeneralButton from '../../../general/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { colors } from '../../../colors'
import {
  AuthUpperContent,
  AuthContainer,
  AuthText,
  AuthButton,
  AuthLogo,
  AuthFields,
  AuthContent,
} from '../../../general/auth_styles'
import image from '../../../assets/doctor_sign_in.png'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import Constants from '../../../utils/constants'
import { Alert } from '@mui/material'
import { useState } from 'react'
import { LoadingButton } from '@mui/lab'

const schema = z
  .object({
    username: z.string().min(3),
    first_name: z.string().min(10),
    last_name: z.string().min(2),
    other_names: z.string(),
    role: z.string(),
    password: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type Schema = z.infer<typeof schema>

interface MyResponse {
  error?: string
}

const SignUpPage = () => {
  const [error, setError] = useState<string>('')

  const defaultValues: Schema = {
    username: '',
    first_name: '',
    last_name: '',
    other_names: '',
    role: '',
    password: '',
    confirmPassword: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  type a = Omit<Schema, 'confirmPassword'>

  const mutation = useMutation({
    mutationFn: async (data: a) => {
      await axios.post(
        `${Constants.BaseURL}auth/signup/medical_personnel/`,
        data
      )
    },
    onSuccess: () => console.log('yess'),
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
    console.log(rest)

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
            <h1>Sign Up</h1>
          </AuthUpperContent>
          <AuthFields>
            {mutation.isError ? <Alert severity="error">{error}</Alert> : null}

            <GeneralInput
              name="username"
              label="Username"
              icon={<AiOutlineUser />}
              placeholder="mardar@gmail.com"
            />
            <GeneralInput
              name="first_name"
              label="First Name"
              icon={<AiOutlineUser />}
              placeholder="Curtis"
            />
            <GeneralInput
              name="last_name"
              label="Last Name"
              icon={<AiOutlineUser />}
              placeholder="Jackson"
            />
            <GeneralInput
              name="other_names"
              label="Other names"
              icon={<AiOutlineUser />}
              placeholder="Lamptey-Odin"
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
                sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
                title="Sign In"
                size="large"
              />
            )}
          </AuthButton>
          <AuthText>Already have an account ? Sign In</AuthText>
        </AuthContent>
      </FormProvider>
    </AuthContainer>
  )
}

export default SignUpPage
