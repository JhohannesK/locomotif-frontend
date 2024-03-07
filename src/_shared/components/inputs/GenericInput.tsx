import { TextField } from '@mui/material'
import { GeneralInputType } from '../../@types'
import { useFormContext, Controller } from 'react-hook-form'

const GeneralInput = ({
  sx,
  placeholder,
  name,
  value,
  rows,
  InputProps,
  disabled,
}: GeneralInputType) => {
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
            {...field}
            id="outlined-multiline-static"
            label=""
            multiline
            placeholder={placeholder}
            rows={rows ?? 4}
            defaultValue=" "
            disabled={disabled}
            value={value}
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
    </>
  )
}

export default GeneralInput
