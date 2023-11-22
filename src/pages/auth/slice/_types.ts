export type UserAuthType = {
  user_role: {
    user_role: UserAuthState
  }
  personnelProfile: PersonnelProfileType
  isLoading: boolean
  isLoggedIn: boolean
  errorMessage: string | undefined
  isLogoutLoading: boolean
}

export type PersonnelProfileType = {
  first_name: string
  other_names: string
  last_name: string
  telephone: string
  date_of_birth: string

  verified: false
  ratings: 4

  CV: string
  year_of_registration: string
  specialities: Array<string>

  country: string
  region: string
  city: string
  digital_address: string
}

export type UserAuthState = 'facility' | 'personnel'
