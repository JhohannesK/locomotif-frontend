import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { setErrorMessages } from '../../../../utils/util'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import { useDispatch } from 'react-redux'
import {
  PersonnelProfileSchema,
  defaultValues,
  schema,
} from '../schema/validation-schema'
import { PersonnelCreateAccount, PersonnelSignupPaylod } from '../../types'
import Constants from '../../../../utils/constants'

axios.defaults.withCredentials = true

const usePersonnelSignup = () => {
  const [error, setError] = useState<string>('')

  const methods = useForm<PersonnelProfileSchema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  // type SchemaType = Omit<Schema, 'confirmPassword'>

  const dispatch = useDispatch()

  const onHandleClick = (index: number) => {
    dispatch(setActiveSidebar({ activeSidebar: index }))
  }

  const mutation = useMutation({
    mutationFn: async (data: PersonnelSignupPaylod) => {
      await axios.post(`${Constants.BaseURL}auth/signup/`, data)
    },
    onSuccess: () => onHandleClick(3),
    onError: (err) => {
      setErrorMessages(err, setError), onHandleClick(2)
    },
  })

  const onSubmit = (data: PersonnelCreateAccount) => {
    const payload: PersonnelSignupPaylod = {
      email: data.email,
      password: data.password,
      user_role: 'personnel',
      extra_data: {
        first_name: data.first_name,
        last_name: data.last_name,
        other_names: data.other_names,
      },
    }
    mutation.mutate(payload)
  }

  return { onSubmit, mutation, methods, error }
}

export default usePersonnelSignup
