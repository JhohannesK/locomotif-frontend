import { Alert, IconButton, Snackbar } from '@mui/material'
import { GrFormClose } from 'react-icons/gr'
import React from 'react'
import { toastParams } from '../../@types'

type ToastProps = {
  children: React.ReactNode
  type?: 'success' | 'error' | 'info' | 'warning'
  open: boolean
  showToast: (newState: toastParams) => void
}

// To use this toast component, add the component to your page and call setToast with the toast params object as an argument.
// Example in the facility signin page.

const Toast = ({ children, type, open, showToast }: ToastProps) => {
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => showToast({ open: false })}
      >
        <GrFormClose />
      </IconButton>
    </React.Fragment>
  )
  console.log(open)
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      action={action}
      open={open}
      autoHideDuration={6000}
    >
      <Alert children={children} severity={type ?? 'success'} />
    </Snackbar>
  )
}

export default Toast
