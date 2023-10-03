import { MenuItem, TextField } from '@mui/material'
import { SelectProps } from '../../@types'
import { Controller, useFormContext } from 'react-hook-form'

const GenericSelect = ({
  name,
  label,
  data,
  defaultValue,
  sx,
}: SelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <Controller
        control={control}
        name={name as string}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id={label}
            select
            label={label}
            sx={{ ...sx }}
            defaultValue={defaultValue}
            error={!!errors[name as string]}
            helperText={
              errors[name as string]
                ? (errors[name as string]?.message as unknown as string)
                : ''
            }
          >
            {data
              ? data.map((option, key) => (
                  <MenuItem key={key} value={option}>
                    {option}
                  </MenuItem>
                ))
              : null}
          </TextField>
        )}
      />
    </>
  )
}

export default GenericSelect
