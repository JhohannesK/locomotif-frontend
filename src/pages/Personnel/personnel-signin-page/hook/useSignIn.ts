import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Constants from '../../../../utils/constants'
import axios, { AxiosResponse } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../../redux/slices/authSlice'
import { setErrorMessages } from '../../../../utils/util'

const useSignIn = () => {
  const navigate = useNavigate()

  const schema = z.object({
    username: z.string().min(3),
    password: z.string().min(3).max(100),
  })

  type Schema = z.infer<typeof schema>

  const [errorMessage, setError] = useState<string>('')
  const defaultValues: Schema = {
    username: '',
    password: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const dispatch = useDispatch()

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: async (datas: Schema) => {
      await axios
        .post(`${Constants.BaseURL}auth/login/medical_personnel/`, datas)
        .then((res: AxiosResponse) => {
          const responseData = res.data
          dispatch(login({ ...responseData, isAuthenticated: true }))
        })
    },
    onSuccess: () => {
      navigate(Constants.ROUTES.personnel_dashboard)
    },
    onError: (err) => setErrorMessages(err, setError),
  })

  const onSubmit = (data: Schema) => {
    mutate(data)
  }

  return { methods, onSubmit, errorMessage, isError, error, isLoading }
}

export default useSignIn
