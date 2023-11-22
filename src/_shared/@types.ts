import {
  ButtonPropsSizeOverrides,
  ButtonPropsVariantOverrides,
  SxProps,
} from '@mui/material'
import { OverridableStringUnion } from '@mui/types'

export type SearchInputType = {
  name: string
  sx?: SxProps
  icon: React.ReactNode
  placeholder: string
  type?: 'text'
  size: 'small' | 'medium'
}

export type GeneralInputType = {
  name: string
  sx?: SxProps
  icon?: React.ReactNode
  placeholder: string
  label?: string
  type?: 'text' | 'password' | 'date' | 'tel' | 'number' | 'multiline-input'
  disabled?: boolean
  InputProps?: object
}

export type GeneralBtnProps = {
  variantText?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >
  sx?: SxProps
  title: string
  type?: 'submit' | 'button'
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    ButtonPropsSizeOverrides
  >
  icon?: React.ReactNode
  onClick?: () => void
}

// export type JobCardType = {
//   required_role: string[]
//   title: string
//   description: string
//   full_time: boolean
//   rate_per_month: number
//   application_deadline: string
//   isactive: boolean
//   medical_facility: string
//   created_at: string
//   start_time: string
//   end_time: string
// }

export type JobCardType = {
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

export interface SelectProps {
  name: string
  label?: string
  data: string[]
  defaultValue: string
  sx?: SxProps
  multiple?: boolean
}

export type toastParams = {
  open: boolean
  type?: 'success' | 'error' | 'info' | 'warning'
  children?: React.ReactNode
}
