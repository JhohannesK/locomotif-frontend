import { Button } from '@mui/material'
import { GeneralBtnProps } from '../../@types'

const GeneralButton = ({
  variantText,
  sx,
  title,
  size,
  icon,
  onClick,
  type = 'submit',
}: GeneralBtnProps) => {
  return (
    <Button
      variant={variantText}
      sx={{ ...sx, height: '40px' }}
      size={size}
      onClick={onClick}
      type={type}
      startIcon={icon}
    >
      {title}
    </Button>
  )
}

export default GeneralButton
