import z from 'zod'
import { Schema } from '../_types'

export const schema = z.object({
  name: z.string().nonempty({ message: 'Facility name is required' }).min(2),
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' }),
})

export const defaultValues: Schema = {
  name: '',
  password: '',
  email: '',
}
