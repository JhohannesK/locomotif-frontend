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
  rows,
  disabled,
  InputProps,
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
      {type === 'multiline-input' ? (
        <Controller
          control={control}
          name={name}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-multiline-static"
              label=""
              multiline
              placeholder={placeholder}
              rows={rows ?? 4}
              defaultValue=" "
              fullWidth
              sx={{ ...sx }}
              inputProps={{
                ...InputProps,
                style: {},
              }}
              error={!!errors[name]}
              helperText={
                errors[name] ? (errors[name]?.message as unknown as string) : ''
              }
            />
          )}
        />
      ) : (
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
                  : type
              }
              sx={{ ...sx }}
              InputProps={{
                ...InputProps,
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
      )}
    </>
  )
}

export default GeneralInput
