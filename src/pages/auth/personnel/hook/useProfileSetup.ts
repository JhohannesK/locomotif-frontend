import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { setErrorMessages } from '../../../../utils/util'
import { useDispatch } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
// import { useNavigate } from 'react-router-dom'

axios.defaults.withCredentials = true

const schema = z.object({
  specialities: z.array(z.string().min(3).optional()),
  registrationyear: z
    .number()
    .positive()
    .gt(1950)
    .lte(new Date().getFullYear())
    .optional(),
  telephone: z.string().optional(),
  date_of_birth: z.string().optional(),
  country: z.string().min(2).max(100).optional(),
  region: z.string().min(2).max(100).optional(),
  city: z.string().min(2).max(100).optional(),
  digital_address: z.string().min(2).max(15).optional(),
})

type Schema = z.infer<typeof schema>

const useProfileSetup = () => {
  const [error, setError] = useState<string>('')

  const defaultValues: Schema = {
    specialities: [],
    registrationyear: 2023,
    telephone: '',
    date_of_birth: '',
    country: '',
    region: '',
    city: '',
    digital_address: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: async (data: Schema) => {
      const signUpData = loadFromLocalStorage({ key: 'PersonnelSignUpData' })
      console.log({ ...signUpData, ...data })
      await axios.put(`${Constants.BaseURL}auth/profile/`, {
        ...signUpData,
        ...data,
      })
      localStorage.removeItem('PersonnelSignUpData')
    },
    onSuccess: () => {
      dispatch(setActiveSidebar({ activeSidebar: 4 }))
    },
    onError: (err) => setErrorMessages(err, setError),
  })

  const onSubmit = (data: Schema) => {
    mutation.mutate(data)
  }

  return { onSubmit, mutation, methods, error }
}

export default useProfileSetup
