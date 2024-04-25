import axios, { AxiosError } from 'axios'
// import { useNavigate } from 'react-router-dom'
import Constants from '../constants'
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../../redux/hooks/middleware'

export const Api = axios.create({
  baseURL: Constants.BaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

interface IToken {
  accessToken: string
  refreshToken: string
}

const SetupInterceptor = ({ children }: { children: React.ReactNode }) => {
  // const navigate = useNavigate()

  const token = loadFromLocalStorage(
    Constants.LOCALSTORAGE_KEYS.TOKEN
  ) as IToken

  const refreshToken = async () => {
    try {
      const response = await Api.post('/refresh-token', {
        refreshToken: token.refreshToken,
      })
      const { accessToken, newRefreshToken } = response.data
      saveToLocalStorage({
        key: Constants.LOCALSTORAGE_KEYS.TOKEN,
        state: { accessToken, refreshToken: newRefreshToken },
      })

      return accessToken
    } catch (error) {
      // Handle token refresh error, e.g., redirect to login page
      console.error('Token refresh failed:', error)
      // navigate(Constants.ROUTES.AUTH.signin)
      throw error
    }
  }

  Api.interceptors.request.use(
    async (config) => {
      try {
        console.log('hitting here')
        config.headers.Authorization = `Bearer ${token.accessToken}`
      } catch (error) {
        console.error('Token refresh failed:', error)
      }
      return config
    },
    (error) => {
      console.error('Token refresh failed:', error)
      return Promise.reject(error)
    }
  )

  Api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config

      if (error?.response?.status === 401 && !originalRequest?.timeout) {
        console.log('Token expired, refreshing token')
        try {
          const accessToken = await refreshToken()
          if (!originalRequest) {
            throw new Error('Original request configuration is missing')
          }
          originalRequest.headers.Authorization = `Bearer ${accessToken}`

          return Api(originalRequest)
        } catch (refreshError) {
          // Handle token refresh error, e.g., redirect to login page
          console.error('Token refresh failed:', refreshError)
          throw refreshError
        }
      }

      // if (axiosError.response) {
      //   const { status } = axiosError.response

      //   if (status === 404) {
      //     navigate(Constants.ROUTES.PAGENOTFOUND)
      //   }
      // }
      return Promise.reject(error)
    }
  )

  return <>{children} </>
}

export { SetupInterceptor }
