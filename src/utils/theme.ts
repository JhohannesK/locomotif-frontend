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
          color: 'white',
          fontFamily: 'Inter',
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

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '12px',
          fontFamily: 'Inter',
        },
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '1rem 1rem',
          justifyContent: 'center',
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          paddingLeft: '1px',
          borderRadius: '10px',
          fontFamily: 'Inter',
        },
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

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          width: '100%',
          borderRadius: '10px',
          '& label.Mui-focused': {
            color: colors.button.pineGreen,
          },

          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: colors.button.pineGreen,
            },
          },
          // '&:focus': {
          //   borderRadius: 4,
          //   borderColor: colors.border.active,
          //   boxShadow: `0 0 0 0.1rem ${colors.background.pineGreen}`,
          // },
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
          borderRadius: '10px',
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

    MuiCheckbox: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
        },
      },
    },
  },
})
