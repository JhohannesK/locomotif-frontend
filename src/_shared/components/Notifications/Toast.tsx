import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'

type ToastProps = {
  children: React.ReactNode
  type?: 'success' | 'error' | 'info' | 'warning'
  open: boolean
  message?: string
}

/**  
 * To use this toast component, add the component to your page and call setToast with the toast params object as an argument.

Example in the facility signin page.

 Toast lasts for 6 seconds
 */

const Toast = ({ children, type, open, message }: ToastProps) => {
  const [opener, setOpener] = useState(open)
  const onClose = () => setOpener(false)
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={opener}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
    >
      <Alert children={children} severity={type ?? 'success'} />
    </Snackbar>
  )
}

export default Toast
