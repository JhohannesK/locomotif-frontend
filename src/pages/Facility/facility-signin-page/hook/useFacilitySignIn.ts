import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import Constants from '../../../../utils/constants'
import { setErrorMessages } from '../../../../utils/util'

const schema = z.object({
  facility_code: z.string().min(4),
  password: z.string().min(8).max(100),
})

type Schema = z.infer<typeof schema>

const useFacilitySignIn = () => {
  const [errorMessage, setError] = useState<string>('')

  const defaultValues: Schema = {
    facility_code: '',
    password: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const { mutate, status, error, isError, isLoading } = useMutation({
    mutationFn: async (data: Schema) =>
      axios.post(`${Constants.BaseURL}auth/login/medical_facility/`, data),
    // onSuccess: () => console.log('yes'),

    // TODO: add some toast to show the error
    onError: (err) => {
      setErrorMessages(err, setError)
    },
  })

  const onSubmit = (data: Schema) => {
    mutate(data)
  }

  return {
    methods,
    mutate,
    status,
    isError,
    errorMessage,
    isLoading,
    error,
    onSubmit,
  }
}

export default useFacilitySignIn
