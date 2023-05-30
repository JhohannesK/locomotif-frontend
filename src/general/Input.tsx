import { IconButton, InputAdornment, SxProps, TextField } from '@mui/material'
import { useState } from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

type GeneralInputType = {
  sx?: SxProps
  icon: React.ReactNode
  placeholder: string
  label: string
  type?: 'text' | 'password'
}

const GeneralInput = ({
  sx,
  icon,
  placeholder,
  label,
  type,
}: GeneralInputType) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        placeholder={placeholder}
        type={
          type === 'password' ? (showPassword ? 'text' : 'password') : 'text'
        }
        sx={{ ...sx }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {type === 'password' ? (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <MdOutlineVisibilityOff />
                  ) : (
                    <MdOutlineVisibility />
                  )}
                </IconButton>
              ) : null}
            </InputAdornment>
          ),
        }}
        size="medium"
      />
    </>
  )
}

export default GeneralInput
