import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { GeneralInputType } from '../../@types'
import { useFormContext, Controller } from 'react-hook-form'

const GeneralInput = ({
  sx,
  icon,
  placeholder,
  label,
  type,
  name,
  disabled,
}: GeneralInputType) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({ field }) => (
          <TextField
            className="input"
            id={label}
            {...field}
            label={label}
            disabled={disabled === true ? true : false}
            placeholder={placeholder}
            error={!!errors[name]}
            helperText={
              errors[name] ? (errors[name]?.message as unknown as string) : ''
            }
            type={
              type === 'password'
                ? showPassword
                  ? 'text'
                  : 'password'
                : type === 'date'
                ? 'date'
                : 'text'
            }
            sx={{ ...sx }}
            InputProps={{
              style: {
                borderRadius: '10px',
              },
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
        )}
      />
    </>
  )
}

export default GeneralInput
