import { Button } from '@mui/material'
import { GeneralBtnProps } from '../../@types'
import React from 'react'
import { cn } from '../../../utils/cn'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    GeneralBtnProps {
  className?: string
}

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
      className={cn(className, 'w-full')}
    >
      {title}
    </Button>
  )
}

export default GeneralButton
