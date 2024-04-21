import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { login } from '../../slice/authSlice'
import { useAppDispatch } from '../../../../redux/hooks/hook'

const schema = z.object({
  email: z.string().min(3),
  password: z.string().min(3).max(100),
})

export type LoginSchema = z.infer<typeof schema>

const useSignIn = () => {
  const dispatch = useAppDispatch()
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

  const onSubmit = (data: LoginSchema) => {
    console.log(data)
    mutation.mutate(data)
  }

  return { methods, onSubmit }
}

export default useSignIn
