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
  type?: 'text' | 'password' | 'date' | 'number'
  disabled?: boolean
  InputProps?: {
    inputProps: { min: string; max: string }
  }
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

export interface JobCardProps {
  title?: string
  description: string
  required_role?: string
  shift: 'MORNING' | 'AFTERNOON' | 'EVENING'
  start_time?: string
  end_time?: string
  rate_per_6_hour_shift: number
  facility: string
}

export interface SelectProps {
  label?: string
  data: string[]
  defaultValue: string
  sx?: SxProps
}

export type toastParams = {
  open: boolean
  type?: 'success' | 'error' | 'info' | 'warning'
  children?: React.ReactNode
}
