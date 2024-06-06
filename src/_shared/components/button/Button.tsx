import { Button } from '@mui/material'
import { GeneralBtnProps } from '../../@types'
import React from 'react'
import { cn } from '@/utils/lib'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    GeneralBtnProps {}

const GeneralButton = ({
  variantText,
  sx,
  title,
  size,
  icon,
  onClick,
  className,
  type = 'submit',
  disabled,
}: ButtonProps) => {
  return (
    <Button
      variant={variantText}
      sx={{ ...sx, height: '40px' }}
      size={size}
      onClick={onClick}
      type={type}
      disabled={disabled}
      startIcon={icon}
      className={cn('w-full', className)}
    >
      {title}
    </Button>
  )
}

export default GeneralButton
