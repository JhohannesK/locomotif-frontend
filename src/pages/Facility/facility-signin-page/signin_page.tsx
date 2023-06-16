import { BsBuildingLock } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import {
  AuthButton,
  AuthContainer,
  AuthContent,
  AuthFields,
  AuthLogo,
  AuthText,
  AuthUpperContent,
} from '../../../general/auth_styles'
import { colors } from '../../../colors'
import image from '../../../assets/doctor_sign_in.png'
import GeneralInput from '../../../general/Input'
import GeneralButton from '../../../general/Button'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../utils/constants'

const schema = z.object({
  facility_code: z.string().min(4),
  password: z.string().min(8).max(100),
})

type Schema = z.infer<typeof schema>

function SigninPageIns() {
  const defaultValues: Schema = {
    facility_code: '',
    password: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const { mutate, status } = useMutation({
    mutationFn: async (data: Schema) =>
      axios.post(`${Constants.BaseURL}auth/login/medical_facility/`, data),
    // onSuccess: () => console.log('yes'),

    // TODO: add some toast to show the error
    onError: () => console.log('some error'),
  })

  const onSubmit = (data: Schema) => {
    mutate(data)
  }

  if (status === 'success') {
    // TODO: redirect to dashboard
    return <div>success</div>
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

            <h1 style={{ fontWeight: 650, fontSize: '2rem' }}>Sign In</h1>
          </AuthUpperContent>
          <div>
            <AuthFields>
              <GeneralInput
                name="facility_code"
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
            </AuthFields>
          </div>
          <AuthText>
            <p>Forgot your password?</p>
          </AuthText>
          <AuthButton>
            <GeneralButton
              sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
              title="Sign In"
            />
          </AuthButton>
        </AuthContent>
      </FormProvider>
    </AuthContainer>
  )
}

export default SigninPageIns
