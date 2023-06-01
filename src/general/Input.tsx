import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { GeneralInputType } from './@types'
import { colors } from '../colors'

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
        sx={{
          ...sx,
          '& label.Mui-focused': {
            color: colors.button.pineGreen,
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: colors.button.pineGreen,
            },
          },
        }}
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
