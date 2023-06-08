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

const schema = z
  .object({
    firstName: z.string().min(10),
    lastName: z.string().min(2),
    email: z.string().email(),
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
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const onSubmit = (data: Schema) => {
    console.log(data)
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
              name="firstName"
              label="First Name"
              icon={<AiOutlineUser />}
              placeholder="Curtis"
            />
            <GeneralInput
              name="lastName"
              label="Last Name"
              icon={<AiOutlineUser />}
              placeholder="Jackson"
            />
            <GeneralInput
              name="email"
              label="E-mail"
              icon={<AiOutlineUser />}
              placeholder="mardar@gmail.com"
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
