import { SxProps } from '@mui/system'
import {
  ButtonPropsSizeOverrides,
  ButtonPropsVariantOverrides,
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
  value?: string
  type?: React.HTMLInputTypeAttribute | undefined
  disabled?: boolean
  rows?: number
  InputProps?: object
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type GeneralBtnProps = {
  variantText?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >
  sx?: SxProps
  // title: string
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    ButtonPropsSizeOverrides
  >
  icon?: React.ReactNode
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
  created_at: string
  posting: PostingType
}
