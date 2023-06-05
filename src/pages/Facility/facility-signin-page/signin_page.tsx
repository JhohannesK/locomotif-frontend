import { BsBuildingLock } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import {
  SignInPageButton,
  SignInPageContainer,
  SignInPageContent,
  SignInPageFields,
  SignInPageLogo,
  SignInPageText,
  SignInPageUpperContent,
} from '../../../general/signin_page_styles'
import { colors } from '../../../colors'
import image from '../../../assets/doctor_sign_in.png'
import GeneralInput from '../../../general/Input'
import GeneralButton from '../../../general/Button'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  facilityCode: z.string().min(6),
  password: z.string().min(8).max(100),
})

type Schema = z.infer<typeof schema>

function SigninPageIns() {
  const defaultValues: Schema = {
    facilityCode: '',
    password: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const onSubmit = (data: Schema) => {
    console.log('hello')

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
                name="facilityCode"
                sx={{ marginBottom: '20px' }}
                label="Facility Code"
                icon={<BsBuildingLock />}
                placeholder="Facility Code"
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
            />
          </SignInPageButton>
        </SignInPageContent>
      </FormProvider>
    </SignInPageContainer>
  )
}

export default SigninPageIns
