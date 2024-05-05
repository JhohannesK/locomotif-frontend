import axios from 'axios'
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
  access: string
  refresh: string
}

const SetupInterceptor = ({ children }: { children: React.ReactNode }) => {
  // const navigate = useNavigate()

  const token = loadFromLocalStorage(
    Constants.LOCALSTORAGE_KEYS.TOKEN
  ) as IToken

  const refreshToken = async () => {
    try {
      console.log('refreshing token')
      const response = await axios
        .post(`${Constants.BaseURL}auth/token/refresh/`, {
          refresh: token.refresh,
        })
        .then((res) => res.data)
      const { access, refresh } = response
      saveToLocalStorage({
        key: Constants.LOCALSTORAGE_KEYS.TOKEN,
        state: { access, refresh },
      })
      console.log('saved to local storage', access)
      return access
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
        config.headers.Authorization = `Bearer ${token.access}`
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
    async (error) => {
      const originalRequest = error.config

      if (error?.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true
        console.log('Token expired, refreshing token')
        try {
          const accessToken = await refreshToken()
          if (!originalRequest) {
            throw new Error('Original request configuration is missing')
          }
          console.log('coming back here')
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
