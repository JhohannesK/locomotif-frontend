import { createTheme } from '@mui/material'
import { colors } from '../colors'

export const theme = createTheme({
  breakpoints: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          color: 'white',
          background: colors.button.pineGreen,
          textTransform: 'revert',
          transition: 'all 0.3s ease-in-out',
          animationDuration: '2000s',
          width: 'fit-content',
          padding: 0,
          margin: 0,
          '&:hover': {
            background: colors.button.pineGreen,
            color: 'white',
            borderColor: colors.button.pineGreen,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
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
    MuiSelect: {
      styleOverrides: {
        select: {
          fontFamily: 'Roboto',
          width: '100%',

          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#E34824',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E34824',
            borderWidth: 'thin',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E34824',
            borderWidth: 'thin',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
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
          fontFamily: 'Roboto',
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
          fontFamily: 'Roboto',
        },
      },
    },
  },
})
