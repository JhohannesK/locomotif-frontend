import { Button } from '@mui/material'
import { GeneralBtnProps } from '../../@types'

const GeneralButton = ({
  variantText,
  sx,
  title,
  size,
  icon,
  onClick,
}: GeneralBtnProps) => {
  return (
    <Button
      variant={variantText}
      sx={{ ...sx, borderRadius: '10px' }}
      size={size}
      onClick={onClick}
      type="submit"
      startIcon={icon}
    >
      {title}
    </Button>
  )
}

export default GeneralButton
