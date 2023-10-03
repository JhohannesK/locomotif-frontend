import { z } from 'zod'

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

export type Schema = z.infer<typeof schema>

// Profile update

export const profileSchema = z.object({
  bio: z.string().min(20).max(1000),
  digitaladdress: z.string().min(3).max(15),
  telephone: z.string().min(8).max(15),
  country: z.string().min(3).max(15),
  region: z.string().min(3).max(15),
  city: z.string().min(3).max(15),
})

export type ProfileSchema = z.infer<typeof profileSchema>
