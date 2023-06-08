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

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import Constants from '../../../utils/constants'
import routes from '../../../routes'

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

const SignUpPageIns = () => {
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

            <h1 style={{ fontWeight: 650, fontSize: '2rem' }}>Sign Up</h1>
          </AuthUpperContent>
          <AuthFields>
            <GeneralInput
              name="facilitycode"
              label="Facility Code"
              icon={<AiOutlineUser />}
              placeholder="KBTH123"
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
              name="date"
              label="Establishment Date"
              icon={<FiKey />}
              placeholder="01/06/2023"
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
    </AuthContainer>
  )
}

export default SignUpPageIns
