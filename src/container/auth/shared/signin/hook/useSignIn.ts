import { useAppDispatch } from '@/redux/hooks/hook'
import { login } from '@/redux/slices/authSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useNavigate } from '@tanstack/react-router'
// import Constants from '../../../../utils/constants'

const schema = z.object({
  email: z.string().min(3),
  password: z.string().min(3).max(100),
})

export type LoginSchema = z.infer<typeof schema>

const useSignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const defaultValues: LoginSchema = {
    email: '',
    password: '',
  }

  const methods = useForm<LoginSchema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const mutation = useMutation({
    mutationFn: async (data: LoginSchema) =>
      dispatch(login({ email: data.email, password: data.password })),
  })

  if (mutation.isSuccess) {
    // navigate(Constants.ROUTES.PAGES.FACILITY.facility)
  }

  const onSubmit = (data: LoginSchema) => {
    navigate({
      to: '/facility/overview',
    })
    mutation.mutate(data)
  }

  return { methods, onSubmit }
}

export default useSignIn
