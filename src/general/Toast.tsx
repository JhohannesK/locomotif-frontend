import { Alert } from '@mui/material'
import React from 'react'

type ToastProps = {
  children: React.ReactNode
  type?: 'success' | 'error' | 'info' | 'warning'
}

const Toast = ({ children, type }: ToastProps) => {
  return (
    <Alert
      sx={{
        fontSize: 24,
        alignItems: 'center',
        position: 'absolute',
        top: 10,
      }}
      children={children}
      severity={type}
    />
  )
}

export default Toast
