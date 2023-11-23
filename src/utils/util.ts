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

export const getYearsOfExperience = () => {}

export const convertDateToString = () => {}

export function stringToColor(string: string) {
  let hash = 0
  let i

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  }
}
