import z from 'zod'
import { Schema } from '../_types'

export const schema = z
  .object({
    name: z.string().nonempty({ message: 'Facility name is required' }).min(2),
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z
      .string()
      .nonempty({ message: 'Password is required' })
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string().min(8).max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const defaultValues: Schema = {
  name: '',
  password: '',
  email: '',
  confirmPassword: '',
}

export const profileSchema = z.object({
  bio: z.string().refine(
    (value) => {
      const trimmedValue = value.trim()
      return trimmedValue.length === 0 || trimmedValue.length >= 20
    },
    {
      message: 'Bio must be at least 20 characters or empty',
    }
  ),
  digitaladdress: z.string().refine(
    (value) => {
      const trimmedValue = value.trim()
      return trimmedValue.length === 0 || trimmedValue.length >= 3
    },
    {
      message: 'Digital address must be at least 3 characters or empty',
    }
  ),
  telephone: z.string().refine(
    (value) => {
      const trimmedValue = value.trim()
      return trimmedValue.length === 0 || trimmedValue.length >= 8
    },
    {
      message: 'Telephone must be at least 8 characters or empty',
    }
  ),
  country: z.string().refine(
    (value) => {
      const trimmedValue = value.trim()
      return trimmedValue.length === 0 || trimmedValue.length >= 3
    },
    {
      message: 'Country must be at least 3 characters or empty',
    }
  ),
  region: z.string().refine(
    (value) => {
      const trimmedValue = value.trim()
      return trimmedValue.length === 0 || trimmedValue.length >= 3
    },
    {
      message: 'Region must be at least 3 characters or empty',
    }
  ),
  city: z.string().refine(
    (value) => {
      const trimmedValue = value.trim()
      return trimmedValue.length === 0 || trimmedValue.length >= 3
    },
    {
      message: 'City must be at least 3 characters or empty',
    }
  ),
})
