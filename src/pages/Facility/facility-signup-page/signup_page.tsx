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
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import routes from '../../../routes'
import DesktopDateInput from '../../../general/Date'

const schema = z
  .object({
    facility_code: z.string().min(4),
    name: z.string().min(2),
    password: z.string(),
    address: z.string().min(1),
    establishment_date: z.string().nonempty(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type Schema = z.infer<typeof schema>

const SignUpPageIns = () => {
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

  type OmitConfirmPassword = Omit<Schema, 'confirmPassword'>

  const mutation = useMutation({
    mutationFn: async (data: OmitConfirmPassword) => {
      axios.post(`${Constants.BaseURL}auth/login/medical_facility/`, data)
    },
    onSuccess: () => console.log('yess'),
    onError: () => console.log('some error'),
  })

  const onSubmit = (data: Schema) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data
    console.log(data)

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
            <GeneralInput
              name="facility_code"
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
            <DesktopDateInput name="establishment_date" />
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
