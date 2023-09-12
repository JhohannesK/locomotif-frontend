import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import Constants from '../../../../utils/constants'

const schema = z
  .object({
    username: z.string().min(3),
    first_name: z.string().min(10),
    last_name: z.string().min(2),
    other_names: z.string(),
    role: z.string(),
    password: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type Schema = z.infer<typeof schema>

interface MyResponse {
  error?: string
}

const usePersonnelSignup = () => {
  const [error, setError] = useState<string>('')

  const defaultValues: Schema = {
    username: '',
    first_name: '',
    last_name: '',
    other_names: '',
    role: 'doctor',
    password: '',
    confirmPassword: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  type a = Omit<Schema, 'confirmPassword'>

  const mutation = useMutation({
    mutationFn: async (data: a) => {
      await axios.post(
        `${Constants.BaseURL}auth/signup/medical_personnel/`,
        data
      )
    },
    onSuccess: () => console.log('yess'),
    onError: (error) => {
      if ((error as AxiosError).code === 'ERR_NETWORK') {
        setError('Check internet connectivity')
      } else if ((error as AxiosError).code === 'ERR_BAD_REQUEST') {
        setError(
          (error as AxiosError<MyResponse>).response?.data?.error ||
            'Unknown error'
        )
      } else if ((error as AxiosError).code === 'ERR_BAD_RESPONSE') {
        setError("It is our fault, we'll fix it soon")
      }
    },
  })

  const onSubmit = (data: Schema) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data
    console.log(rest)

    mutation.mutate(rest)
  }

  return { onSubmit, mutation, methods, error }
}

export default usePersonnelSignup
