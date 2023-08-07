import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import Constants from '../../../../utils/constants'
import { toastParams } from '../../../../_shared/@types'

const schema = z.object({
  facility_code: z.string().min(4),
  password: z.string().min(8).max(100),
})

type Schema = z.infer<typeof schema>

interface MyResponse {
  error?: string
}

const useFacilitySignIn = () => {
  const [error, setError] = useState<string>('')
  const [toast, setToast] = useState<toastParams>({
    open: false,
    type: 'success',
    children: 'Default Toast',
  })

  const defaultValues: Schema = {
    facility_code: '',
    password: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const { mutate, status, isError, isLoading } = useMutation({
    mutationFn: async (data: Schema) =>
      axios.post(`${Constants.BaseURL}auth/login/medical_facility/`, data),
    // onSuccess: () => console.log('yes'),

    // TODO: add some toast to show the error
    onError: (error) => {
      if ((error as AxiosError).code === 'ERR_NETWORK') {
        setError('Check internet connectivity')
      } else if ((error as AxiosError).code === 'ERR_BAD_REQUEST') {
        setError(
          (error as AxiosError<MyResponse>).response?.data?.error ||
            'Unknown error'
        )
        showToast({ open: true, children: 'Unknown error' })
      } else if ((error as AxiosError).code === 'ERR_BAD_RESPONSE') {
        setError("It is our fault, we'll fix it soon")
        showToast({ open: true, children: 'Unknown error' })
      }
    },
  })

  const onSubmit = (data: Schema) => {
    mutate(data)
  }
  const showToast = (newState: toastParams) => {
    setToast({ ...newState })
  }
  return {
    methods,
    mutate,
    status,
    isError,
    isLoading,
    error,
    toast,
    showToast,
    onSubmit,
  }
}

export default useFacilitySignIn
