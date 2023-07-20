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
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: colors.button.pineGreen,
          },

          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: colors.button.pineGreen,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          width: '100%',
          '& .MuiAccordionSummary-content': {
            '& .MuiTypography-root': {
              fontSize: '1.2rem',
            },
          },
          '& .MuiListItemText-root': {
            '& .MuiTypography-root': {
              cursor: 'pointer',
            },
          },
        },
      },
    },

    MuiButtonBase: {
      styleOverrides: {
        root: {
          '& .MuiLoadingButton-loadingIndicator': {
            color: 'white',
          },
        },
      },
    },
  },
})
