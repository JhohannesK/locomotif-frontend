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

export type FacilityType = {
  id: number
  recruiter_contact: Array<string> | null
  location: Array<string> | null
  title: string
  description: string
  advertisement_reason: 'NEW_ROLE' | 'TEMPORARY' | 'REPLACEMENT'
  contract_type: 'LOCUM' | 'PERMANENT' | null
  contract_duration: '' | null
  contract_working_pattern: 'FULL_TIME' | 'PART_TIME' | 'FLEXIBLE_TIME' | null
  created_at: string
  payment_type: 'FIXED' | 'RANGE' | null
  payment_billing_cylce: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | null
  payment_fixed_amount: null
  payment_max_amount: null
  payment_min_amount: null
  qualifications: 'string' | null
  additional_information: null
  payment_currency: 'GHS' | 'GBP' | 'USD'
  supporting_document: null
  pr_required: 'YES' | 'NO' | null
  pre_application_questions: string | undefined
  how_to_apply: 'CV' | 'ONLINE' | null
  required_staff_group:
    | 'MEDICAL'
    | 'NURSES_AND_MIDWIFERY'
    | 'ALLIED_AND_HEALTH_PROFESSIONALS'
    | 'ADMINISTRATIVE'
    | 'ESTATES_AND_ANCILLARY'
    | null
  required_area_of_work: null
  status: string
  facility: {
    user: number
    name: string
    bio: string
    telephone: string
    verified: boolean
    country: string
    region: string
    city: string
    digital_address: string
  }
}

export interface IState {
  publish_form_state: FacilityType
}
