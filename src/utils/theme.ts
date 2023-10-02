import { createTheme } from '@mui/material'
import { colors } from '../colors'

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: 'bold',
          fontFamily: 'Inter',
          color: 'white',
          background: colors.button.pineGreen,
          transition: 'ease-in-out',
          textTransform: 'revert',
          animationDuration: '2000s',
          width: 'fit-content',
          padding: 0,
          margin: 0,
          // '&:hover': {
          //   background: colors.button.pineGreen,
          //   borderColor: colors.button.pineGreen,
          // },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
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
          fontFamily: 'Inter',
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
          fontFamily: 'Inter',
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
          fontFamily: 'Inter',
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
          fontFamily: 'Inter',
        },
      },
    },
  },
})
