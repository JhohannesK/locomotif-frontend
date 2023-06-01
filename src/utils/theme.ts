import { createTheme } from '@mui/material'
import { colors } from '../colors'

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontFamily: 'Raleway',
          fontWeight: 'bold',
          color: 'white',
          background: 'white',
          transition: 'ease-in-out',
          animationDuration: '2000s',
          '&:hover': {
            background: colors.button.viridian,
          },
          width: '50%',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Raleway',
          gap: '1rem',
          width: '100%',
        },
        input: {
          '::placeholder': {
            fontSize: '12px',
          },
        },
      },
    },
  },
})
