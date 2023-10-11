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
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    ButtonPropsSizeOverrides
  >
  icon?: React.ReactNode
  onClick?: () => void
}

export type JobCardType = {
  required_role: string[]
  title: string
  description: string
  full_time: boolean
  rate_per_month: number
  application_deadline: string
  isactive: boolean
  medical_facility: string
  created_at: string
  start_time: string
  end_time: string
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
