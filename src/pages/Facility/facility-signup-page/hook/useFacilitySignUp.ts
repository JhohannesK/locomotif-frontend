import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { OmitConfirmPassword, Schema, schema } from '../_types'
import Constants from '../../../../utils/constants'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { setErrorMessages } from '../../../../utils/util'

const useFacilitySignUp = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string>('')

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

  const mutation = useMutation({
    mutationFn: async (data: OmitConfirmPassword) => {
      console.log('🚀 ~ file: signup_page.tsx:46 ~ mutationFn: ~ data:', data)
      await axios.post(
        `${Constants.BaseURL}auth/signup/medical_facility/`,
        data
      )
    },
    onSuccess: () => navigate(Constants.ROUTES.facility_signin),
    onError: (err) => setErrorMessages(err, setError),
  })

  const onSubmit = (data: Schema) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data

    mutation.mutate(rest)
  }

  return { onSubmit, mutation, methods, error }
}

export default useFacilitySignUp
