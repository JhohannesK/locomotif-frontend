import { zodResolver } from '@hookform/resolvers/zod'
import { Schema, schema } from '../_types'
import Constants from '../../../../utils/constants'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { setErrorMessages } from '../../../../utils/util'
import { useDispatch } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'

axios.defaults.withCredentials = true

interface FacilitySignUpPayload {
  email: string
  password: string
  user_role: 'facility'
  extra_data: {
    name: string
  }
}

const useFacilitySignUp = () => {
  const [error, setError] = useState<string>('')

  const dispatch = useDispatch()

  const onHandleClick = (index: number) => {
    dispatch(setActiveSidebar({ activeSidebar: index }))
  }

  const defaultValues: Schema = {
    name: '',
    password: '',
    email: '',
    confirmPassword: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const mutation = useMutation({
    mutationFn: async (data: FacilitySignUpPayload) => {
      await axios.post(`${Constants.BaseURL}auth/signup/`, data)
    },
    onSuccess: () => onHandleClick(3),
    onError: (err) => {
      setErrorMessages(err, setError), onHandleClick(2)
    },
  })

  const onSubmit = (data: Schema) => {
    const payload: FacilitySignUpPayload = {
      email: data.email,
      password: data.password,
      user_role: 'facility',
      extra_data: {
        name: data.name,
      },
    }

    mutation.mutate(payload)
  }

  return { onSubmit, mutation, methods, error }
}

export default useFacilitySignUp
