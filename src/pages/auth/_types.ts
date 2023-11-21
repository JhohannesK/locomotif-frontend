export interface IStep {
  title: string
  subTitle: string
}

export type Steps = Array<IStep>

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

export interface ITransitData {
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

// Types for Personel Signup

export interface PersonnelCreateAccount {
  first_name: string
  other_names: string
  last_name: string
  email: string
  password: string
  confirmPassword: string
}

export type PersonnelSignupPaylod = {
  email: string
  password: string
  user_role: string
  extra_data: {
    first_name: string
    other_names: string
    last_name: string
  }
}

export interface IPersonnelProfilePayload {
  specialities?: (string | undefined)[]
  year_of_registration?: number | undefined
  telephone?: string | undefined
  date_of_birth?: string | undefined
  country?: string | undefined
  region?: string | undefined
  city?: string | undefined
  digital_address?: string | undefined
}

export interface IPersonnelProfileData extends IPersonnelProfilePayload {
  password: string
  confirmPassword: string
}

export interface PersonnelProfilePayload
  extends Omit<PersonnelCreateAccount, 'password' | 'confirmPassword'>,
    IPersonnelProfilePayload {
  CV?: string
}

export type PersonnelSpecialities = {
  specialities: string[]
}
