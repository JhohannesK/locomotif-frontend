import { IconButton, InputAdornment, TextField } from '@mui/material'
import { SearchInputType } from '../../@types'
import { createTheme } from '@mui/material'
import { colors } from '../../../colors'
import { ThemeProvider } from '@mui/material'

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: colors.button.pineGreen,
          },

          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              // - The <fieldset> inside the Input-root
              // borderColor: '#04a592', // - Set the Input border
            },
            '&:hover fieldset': {
              borderColor: '#04a592', // - Set the Input border when parent has :hover
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.button.pineGreen,
            },
          },
        },
      },
    },
  },
})

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
      <ThemeProvider theme={theme}>
        <TextField
          name={name}
          id={name}
          placeholder={placeholder}
          type={type}
          sx={{ ...sx }}
          size={size}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>{icon}</IconButton>
              </InputAdornment>
            ),
          }}
        />
      </ThemeProvider>
    </>
  )
}

export default SearchInput
