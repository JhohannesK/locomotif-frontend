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
  endpoint: string
}

export type FilterRecordType = {
  [key: string]: boolean
}
