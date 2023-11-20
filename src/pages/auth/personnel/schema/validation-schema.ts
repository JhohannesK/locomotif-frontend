import z from 'zod'

export const schema = z
  .object({
    first_name: z
      .string({
        required_error: 'First name cannot be left blank',
        invalid_type_error: 'First name must be a string',
      })
      .min(2, { message: 'First name must be at least 2 characters long' }),
    last_name: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters long' }),
    other_names: z.string(),
    user_role: z.string(),
    email: z
      .string({ required_error: 'Email cannot be left blank' })
      .email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .max(100),
    confirmPassword: z
      .string({ required_error: 'Confirm password cannot be left blank' })
      .min(8, {
        message: 'Confirm password must be at least 8 characters long.',
      })
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type PersonnelProfileSchema = z.infer<typeof schema>

export const defaultValues: PersonnelProfileSchema = {
  first_name: '',
  last_name: '',
  other_names: '',
  user_role: 'personnel',
  email: '',
  password: '',
  confirmPassword: '',
}
