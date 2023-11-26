import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import Constants from './constants'

export const useSetupInterceptor = () => {
  const navigate = useNavigate()

  axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error

        if (axiosError.response) {
          const { status } = axiosError.response

          if (status === 404) {
            // console.log('Redirecting to 404 page');
            navigate(Constants.ROUTES.PAGENOTFOUND)
          } else if (status === 401) {
            // console.log('Redirecting to login page');
            navigate(Constants.ROUTES.GetStarted)
          }
        }
      }
      return Promise.reject(error)
    }
  )
}
