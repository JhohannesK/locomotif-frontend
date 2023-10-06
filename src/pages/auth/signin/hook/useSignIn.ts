import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import Constants from '../../../../utils/constants'
import { login } from '../../../../redux/slices/authSlice'
import { setErrorMessages } from '../../../../utils/util'
import { RootState } from '../../../../redux/store'

axios.defaults.withCredentials = true

const schema = z.object({
  email: z.string().min(3),
  password: z.string().min(3).max(100),
})

type Schema = z.infer<typeof schema>

const useSignIn = () => {
  const navigate = useNavigate()

  const [errorMessage, setError] = useState<string>('')

  const routeUserToPage = useSelector(
    (state: RootState) => state.auth.signInResponse.user_role
  )
  console.log(routeUserToPage)
  const defaultValues: Schema = {
    email: '',
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
        .post(`${Constants.BaseURL}auth/login/`, datas)
        .then((res: AxiosResponse) => {
          const responseData = res.data
          dispatch(login({ ...responseData, isAuthenticated: true }))
        })
    },
    onSuccess: () => {
      if (routeUserToPage === 'facility')
        navigate(Constants.ROUTES.FACILITY.facility_dashboard)
      else navigate(Constants.ROUTES.PERSONNEL.personnel_dashboard)
    },
    onError: (err) => {
      setErrorMessages(err, setError)
      console.log(err)
    },
  })

  const onSubmit = (data: Schema) => {
    mutate(data)
  }
  return { methods, onSubmit, errorMessage, isError, error, isLoading }
}

export default useSignIn
