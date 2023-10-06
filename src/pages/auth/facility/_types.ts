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

export interface FacilityProfilePayload {
  name: string
  email: string
  telephone: string
  bio: string
  digital_address: string
  country: string
  region: string
  city: string
}

export interface TransitData {
  name: string
  email: string
  bio: string
  digitaladdress: string
  telephone: string
  country: string
  region: string
  city: string
  password: string
  confirmPassword: string
}

export type ProfileSchema = z.infer<typeof profileSchema>
