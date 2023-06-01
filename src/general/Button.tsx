import { Button } from '@mui/material'
import { GeneralBtnProps } from './@types'

const GeneralButton = ({ variantText, sx, title, size }: GeneralBtnProps) => {
  return (
    <Button variant={variantText} sx={{ ...sx }} size={size}>
      {title}
    </Button>
  )
}

export default GeneralButton
