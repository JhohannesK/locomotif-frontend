export type FilterObject = {
  status: StatusType[]
  sort_by?: 'Oldest'
}

export type StatusType = 'pending' | 'accepted' | 'declined'

export type PostingCardType = {
  id: number
  title: string
  description: string
  full_time: boolean
  application_deadline: string
  start_time: string
  end_time: string | null
  rate_per_month: number
  rate_per_6_hour_shift: string | null
  shift_type: string | null
  is_active: boolean
  required_speciality: string
  facility: {
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
