import { MenuItem, TextField } from '@mui/material'
import { SelectProps } from '../../@types'

const GenericSelect = ({ label, data, defaultValue, sx }: SelectProps) => {
  return (
    <>
      <TextField
        id={label}
        select
        label={label}
        sx={{ ...sx }}
        defaultValue={defaultValue}
      >
        {data
          ? data.map((option, key) => (
              <MenuItem key={key} value={option}>
                {option}
              </MenuItem>
            ))
          : null}
      </TextField>
    </>
  )
}

export default GenericSelect
