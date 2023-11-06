import React, { createContext } from 'react'

interface ILayoutContext {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleClose: () => void
  handleOpen: () => void
}

export const LayoutContext = createContext<ILayoutContext>({
  open: false,
  setOpen: () => {},
  handleClose: () => {},
  handleOpen: () => {},
})

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const value = { open, setOpen, handleClose, handleOpen }
  return (
    <LayoutContext.Provider value={value}>{children} </LayoutContext.Provider>
  )
}

export default LayoutProvider
