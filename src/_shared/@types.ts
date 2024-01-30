import {
  ButtonPropsSizeOverrides,
  ButtonPropsVariantOverrides,
  SxProps,
} from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
import { Status } from '../pages/Personnel/personnel-applications-page/components/applicationsCard/applicationsCard'
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
  rows?: number
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

export interface SpecialitiesType {
  specialities: string[]
}

export type PersonnelSliceType = {
  activeNav: number
  postingId: number | undefined
  endpoint: string
}

export type FilterRecordType = {
  [key: number]: boolean
}

export type ShiftTypesType = {
  shift_types: string[]
}

export interface FacilityType {
  name: string
  bio: string
  telephone: string
  verified: boolean
  country: string
  region: string
  city: string
  digital_address: string
}

export interface PostingType {
  id: number
  title: string
  description: string
  full_time: boolean
  application_deadline: string
  start_time: string
  end_time: string | null
  rate_per_month: number
  rate_per_6_hour_shift: number | null
  shift_type: string | null
  is_active: boolean
  required_speciality: string
  facility: FacilityType
}

export interface ApplicationType {
  id: number
  status: Status
  created_at: string
  posting: PostingType
}
