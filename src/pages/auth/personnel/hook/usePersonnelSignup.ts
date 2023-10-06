import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { setErrorMessages } from '../../../../utils/util'
// import { useNavigate } from 'react-router-dom'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import { useDispatch } from 'react-redux'
import { defaultValues, schema, Schema } from '../schema/validation-schema'

axios.defaults.withCredentials = true

const usePersonnelSignup = () => {
  const [error, setError] = useState<string>('')

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  type SchemaType = Omit<Schema, 'confirmPassword'>

  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: async (data: SchemaType) => {
      localStorage.removeItem('PersonnelSignupData')
      const newData = {
        email: data.email,
        password: data.password,
        user_role: data.user_role,
        extra_data: {
          first_name: data.first_name,
          last_name: data.last_name,
          other_names: data.other_names,
        },
      }
      console.log(newData)
      await axios.post(`${Constants.BaseURL}auth/signup/`, newData)
    },
    onSuccess: () => {
      dispatch(setActiveSidebar({ activeSidebar: 2 }))
    },
    onError: (err) => setErrorMessages(err, setError),
  })

  const onSubmit = (data: Schema) => {
    mutation.mutate(data)
  }

  return { onSubmit, mutation, methods, error }
}

export default usePersonnelSignup
