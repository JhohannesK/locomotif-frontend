import { z } from 'zod'

export const schema = z
  .object({
    facility_code: z.string(),
    name: z.string().nonempty({ message: 'Facility name is required' }).min(2),
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z
      .string()
      .nonempty({ message: 'Password is required' })
      .min(8, { message: 'Password must be at least 8 characters' }),
    address: z.string({ description: 'Your digital address' }).min(1),
    establishment_date: z.string().nonempty({ message: 'Please select date' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type Schema = z.infer<typeof schema>

export type OmitConfirmPassword = Omit<Schema, 'confirmPassword'>
