import { createTheme } from '@mui/material'
import { colors } from '../../colors'

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          color: 'white',
          background: colors.button.pineGreen,
          '&:hover': {
            background: colors.button.aquamarine,
          },
          width: '50%',
        },
      },
    },
  },
})
