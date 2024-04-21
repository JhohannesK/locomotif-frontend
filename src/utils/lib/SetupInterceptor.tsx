import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import Constants from '../constants'

axios.defaults.withCredentials = true
export const Api = axios.create({
  baseURL: Constants.BaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const SetupInterceptor = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()

  Api.interceptors.request.use(async (config) => {
    return config
  })

  Api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error

        if (axiosError.response) {
          const { status } = axiosError.response

          if (status === 404) {
            navigate(Constants.ROUTES.PAGENOTFOUND)
          } else if (status === 401) {
            navigate(Constants.ROUTES.AUTH.signin)
          }
        }
      }
      return Promise.reject(error)
    }
  )

  return <>{children} </>
}

export { SetupInterceptor }
