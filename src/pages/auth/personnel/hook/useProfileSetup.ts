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
  specialty: z.string().min(3),
  registrationyear: z
    .number()
    .positive()
    .gt(1950)
    .lte(new Date().getFullYear()),
  telephone: z.string(),
  date_of_birth: z.string(),
  country: z.string().min(2).max(100),
  region: z.string().min(2).max(100),
  city: z.string().min(2).max(100),
  digital_address: z.string().min(2).max(15),
})

type Schema = z.infer<typeof schema>

const useProfileSetup = () => {
  const [error, setError] = useState<string>('')

  const defaultValues: Schema = {
    specialty: '',
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
