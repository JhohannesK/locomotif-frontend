import { InputAdornment, SxProps, TextField } from '@mui/material'

type GeneralInputType = {
  sx?: SxProps
  icon: React.ReactNode
  placeholder: string
  label: string
}

const GeneralInput = ({ sx, icon, placeholder, label }: GeneralInputType) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        placeholder={placeholder}
        type="text"
        sx={{ ...sx }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        size="medium"
      />
    </>
  )
}

export default GeneralInput
