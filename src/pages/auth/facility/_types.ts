import { z } from 'zod'
import { profileSchema, schema } from './schema/validation'

export type Schema = z.infer<typeof schema>

export interface FacilitySignUpPayload {
  email: string
  password: string
  user_role: 'facility'
  extra_data: {
    name: string
  }
}

export type ProfileSchema = z.infer<typeof profileSchema>
