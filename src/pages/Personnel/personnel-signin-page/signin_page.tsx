import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'

import { colors } from '../../../colors'
import image from '../../../assets/doctor_sign_in.png'
import GeneralInput from '../../../general/Input'
import GeneralButton from '../../../general/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  SignInPageButton,
  SignInPageContainer,
  SignInPageContent,
  SignInPageFields,
  SignInPageLogo,
  SignInPageText,
  SignInPageUpperContent,
} from '../../../general/signin_page_styles'
import { FormProvider } from 'react-hook-form'

const schema = z.object({
  username: z.string().min(6),
  password: z.string().min(8).max(100),
})

type Schema = z.infer<typeof schema>

function SigninPage() {
  const defaultValues: Schema = {
    username: '',
    password: '',
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
            <SignInPageLogo>
              <img
                src={image}
                alt="health-leaf icon"
                style={{ height: '80%', width: '80%', objectFit: 'contain' }}
              />
            </SignInPageLogo>

            <h1 style={{ fontWeight: 650, fontSize: '2rem' }}>Sign In</h1>
          </SignInPageUpperContent>
          <div>
            <SignInPageFields>
              <GeneralInput
                name="username"
                sx={{ marginBottom: '20px' }}
                label="Username"
                icon={<AiOutlineUser />}
                placeholder="Username"
              />
              <GeneralInput
                name="password"
                sx={{ marginBottom: '20px' }}
                label="Password"
                icon={<FiKey />}
                placeholder="Password"
                type="password"
              />
            </SignInPageFields>
          </div>
          <SignInPageText>
            <p>Forgot your password?</p>
          </SignInPageText>
          <SignInPageButton>
            <GeneralButton
              sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
              title="Sign In"
              size="large"
            />
          </SignInPageButton>
        </SignInPageContent>
      </FormProvider>
    </SignInPageContainer>
  )
}

export default SigninPage
