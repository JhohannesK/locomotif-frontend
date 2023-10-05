import { z } from 'zod'
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

axios.defaults.withCredentials = true

const schema = z
  .object({
    first_name: z.string().min(2),
    last_name: z.string().min(2),
    other_names: z.string(),
    user_role: z.string(),
    email: z.string().min(8).max(100),
    password: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type Schema = z.infer<typeof schema>

const usePersonnelSignup = () => {
  const [error, setError] = useState<string>('')

  const defaultValues: Schema = {
    first_name: '',
    last_name: '',
    other_names: '',
    user_role: 'personnel',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  type a = Omit<Schema, 'confirmPassword'>

  // const navigate = useNavigate()

  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: async (data: a) => {
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
      // navigate(Constants.ROUTES.PERSONNEL.personnel_dashboard)
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
