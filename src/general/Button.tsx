import {
  Button,
  ButtonPropsVariantOverrides,
  SxProps,
  ButtonPropsSizeOverrides,
} from '@mui/material'
import { OverridableStringUnion } from '@mui/types'

type GeneralBtnProps = {
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
}

const GeneralButton = ({ variantText, sx, title, size }: GeneralBtnProps) => {
  return (
    <Button variant={variantText} sx={{ ...sx }} size={size}>
      {title}
    </Button>
  )
}

export default GeneralButton
