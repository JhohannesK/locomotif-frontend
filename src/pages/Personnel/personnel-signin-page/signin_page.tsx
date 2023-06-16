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
  AuthButton,
  AuthContainer,
  AuthContent,
  AuthFields,
  AuthLogo,
  AuthText,
  AuthUpperContent,
} from '../../../general/auth_styles'
import { FormProvider } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import Constants from '../../../utils/constants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(3).max(100),
})

type Schema = z.infer<typeof schema>

function SigninPage() {
  const navigate = useNavigate()
  const defaultValues: Schema = {
    username: '',
    password: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const { mutate } = useMutation({
    mutationFn: async (datas: Schema) => {
      await axios.post(
        `${Constants.BaseURL}auth/login/medical_personnel/`,
        datas
      )
    },
    onSuccess: () => {
      navigate(Constants.ROUTES.root)
    },
    onError: () => console.log('some error'),
  })

  const onSubmit = (data: Schema) => {
    mutate(data)
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
            </AuthFields>
          </div>
          <AuthText>Forgot your password?</AuthText>
          <AuthButton>
            <GeneralButton
              sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
              title="Sign In"
              size="large"
            />
          </AuthButton>
        </AuthContent>
      </FormProvider>
    </AuthContainer>
  )
}

export default SigninPage
