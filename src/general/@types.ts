import {
  ButtonPropsSizeOverrides,
  ButtonPropsVariantOverrides,
  SxProps,
} from '@mui/material'
import { OverridableStringUnion } from '@mui/types'

export type GeneralInputType = {
  sx?: SxProps
  icon: React.ReactNode
  placeholder: string
  label: string
  type?: 'text' | 'password'
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
