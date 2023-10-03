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
// import { useNavigate } from 'react-router-dom'

const schema = z.object({
  specialty: z.string().min(3),
  registrationyear: z
    .number()
    .positive()
    .gt(1950)
    .lte(new Date().getFullYear()),
  DoB: z.string(),
  // date().min(new Date('1900-01-01')).max(new Date()),
  location: z.string().min(2).max(100),
  digitaladdress: z.string().min(2).max(15),
})

type Schema = z.infer<typeof schema>

const useProfileSetup = () => {
  const [error, setError] = useState<string>('')

  const defaultValues: Schema = {
    specialty: '',
    registrationyear: 2023,
    DoB: '',
    location: '',
    digitaladdress: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: async (data: Schema) => {
      console.log(data)
      await axios.put(`${Constants.BaseURL}auth/profile/`, data)
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
