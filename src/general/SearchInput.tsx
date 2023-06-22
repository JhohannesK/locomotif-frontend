import { IconButton, InputAdornment, TextField } from '@mui/material'
import { SearchInputType } from './@types'

const SearchInput = ({
  sx,
  icon,
  placeholder,
  type,
  name,
  size,
}: SearchInputType) => {
  return (
    <>
      <TextField
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        sx={{ ...sx }}
        size={size}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>{icon}</IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  )
}

export default SearchInput
