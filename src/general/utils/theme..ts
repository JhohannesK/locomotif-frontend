import { createTheme } from '@mui/material'
import { colors } from '../../colors'

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontFamily: 'Raleway',
          fontWeight: 'bold',
          color: 'white',
          background: colors.button.pineGreen,
          transition: 'ease-in-out',
          animationDuration: '2000s',
          '&:hover': {
            background: colors.button.viridian,
          },
          width: '50%',
        },
      },
    },
  },
})
