import { Button } from '@mui/material'
import { GeneralBtnProps } from './@types'

const GeneralButton = ({
  variantText,
  sx,
  title,
  size,
  onClick,
}: GeneralBtnProps) => {
  return (
    <Button
      variant={variantText}
      sx={{ ...sx }}
      size={size}
      onClick={onClick}
      type="submit"
    >
      {title}
    </Button>
  )
}

export default GeneralButton
