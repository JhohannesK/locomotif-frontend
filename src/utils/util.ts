import { AxiosError } from 'axios'

interface MyResponse {
  error?: string
  message?: string
}

export const setErrorMessages = (
  err: unknown,
  fn: React.Dispatch<React.SetStateAction<string>>
) => {
  if ((err as AxiosError).code === 'ERR_BAD_REQUEST') {
    fn(
      (err as AxiosError<MyResponse>).response?.data?.error ??
        (err as AxiosError<MyResponse>).response?.data?.message ??
        'Unknown error'
    )
  } else if ((err as AxiosError).code === 'ERR_BAD_RESPONSE') {
    fn("It is our fault, we'll fix it soon")
  }
}
