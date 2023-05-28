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
        id="outlined-textarea"
        label={label}
        placeholder={placeholder}
        multiline
        sx={sx}
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
