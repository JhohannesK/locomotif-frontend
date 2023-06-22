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
  label: string
  type?: 'text' | 'password' | 'date'
  disabled?: boolean
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
  onClick?: () => void
}
