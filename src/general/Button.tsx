import { Button, ButtonPropsVariantOverrides, SxProps } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'

type GeneralBtnProps = {
  variantText?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >
  sx?: SxProps
  title: string
}

const GeneralButton = ({ variantText, sx, title }: GeneralBtnProps) => {
  return (
    <Button
      variant={variantText}
      sx={{ ...sx, fontFamily: 'Raleway', fontWeight: 'bold' }}
    >
      {title}
    </Button>
  )
}

export default GeneralButton
