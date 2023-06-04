import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'

import {
  SignInPageContainer,
  SignInPageContent,
  SignInPageTitle,
  SignInPageFields,
  SignInPageText,
  SignInPageButton,
} from './signup_page_styles'
import GeneralInput from '../../../general/Input'
import GeneralButton from '../../../general/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { colors } from '../../../colors'
import { SignInPageUpperContent } from '../../../general/signin_page_styles'
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
    <SignInPageContainer>
      <FormProvider {...methods}>
        <SignInPageContent onSubmit={methods.handleSubmit(onSubmit)}>
          <SignInPageUpperContent>
            <img
              src={image}
              alt="health-leaf icon"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
            <SignInPageTitle>Sign Up</SignInPageTitle>
          </SignInPageUpperContent>
          <div>
            <SignInPageFields>
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
              />
            </SignInPageFields>
          </div>

          <SignInPageButton>
            <GeneralButton
              title="Sign Up"
              sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
            />
          </SignInPageButton>
          <SignInPageText>
            Already have an account ? <a href="#">Sign In</a>
          </SignInPageText>
        </SignInPageContent>
      </FormProvider>
    </SignInPageContainer>
  )
}

export default SignUpPage
