import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { setErrorMessages } from '../../../../utils/util'
// import { useNavigate } from 'react-router-dom'

const schema = z.object({
  specialty: z.string().min(3),
  registrationyear: z
    .number()
    .positive()
    .gt(1950)
    .lte(new Date().getFullYear()),
  DoB: z.date().min(new Date('1900-01-01')).max(new Date()),
  location: z.string().min(8).max(100),
  digitaladdress: z.string().min(3).max(15),
})

type Schema = z.infer<typeof schema>

const usePersonnelSignup = () => {
  const [error, setError] = useState<string>('')

  const defaultValues: Schema = {
    specialty: '',
    registrationyear: 0,
    DoB: new Date(),
    location: '',
    digitaladdress: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  //   const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async (data: Schema) => {
      await axios.post(
        `${Constants.BaseURL}auth/signup/medical_personnel/`,
        data
      )
    },
    onSuccess: () => {
      console.log('Profile Setup')
      //   navigate(Constants.ROUTES.PERSONNEL.personnel_dashboard)
    },
    onError: (err) => setErrorMessages(err, setError),
  })

  const onSubmit = (data: Schema) => {
    mutation.mutate(data)
  }

  return { onSubmit, mutation, methods, error }
}

export default usePersonnelSignup
