import React, { createContext } from 'react'

interface ILayoutContext {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleClose: () => void
  handleOpen: () => void
  isSuccess: boolean
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
  isDanger?: boolean
  setDanger: React.Dispatch<React.SetStateAction<boolean>>
}

export const LayoutContext = createContext<ILayoutContext>({
  open: false,
  setOpen: () => {},
  handleClose: () => {},
  handleOpen: () => {},
  setSuccess: () => {},
  setDanger: () => {},
  isSuccess: false,
  isDanger: false,
})

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [isSuccess, setSuccess] = React.useState(false)
  const [isDanger, setDanger] = React.useState(false)
  const value = {
    open,
    setOpen,
    handleClose,
    handleOpen,
    isSuccess,
    isDanger,
    setSuccess,
    setDanger,
  }
  return (
    <LayoutContext.Provider value={value}>{children} </LayoutContext.Provider>
  )
}

export default LayoutProvider
