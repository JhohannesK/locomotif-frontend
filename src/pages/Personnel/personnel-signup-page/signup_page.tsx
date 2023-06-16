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
  AuthLink,
} from '../../../general/auth_styles'
import Constants from '../../../utils/constants'
import routes from '../../../routes'
import image from '../../../assets/doctor_sign_in.png'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

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

const SignUpPage = () => {
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
    onError: (err) => console.log(err),
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
            <GeneralInput
              name="username"
              label="Username"
              icon={<AiOutlineUser />}
              placeholder="Curtis"
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
              label="Other Names"
              icon={<AiOutlineUser />}
              placeholder="other names"
            />
            <GeneralInput
              name="role"
              label="Role"
              icon={<AiOutlineUser />}
              placeholder="Role"
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
            <GeneralButton
              title="Sign Up"
              sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
              size="large"
            />
          </AuthButton>
          <AuthText>
            Already have an account ?{' '}
            <AuthLink
              onClick={() => {
                routes.navigate(Constants.ROUTES.personnel_signin)
              }}
            >
              Sign In
            </AuthLink>
          </AuthText>
        </AuthContent>
      </FormProvider>
    </AuthContainer>
  )
}

export default SignUpPage
