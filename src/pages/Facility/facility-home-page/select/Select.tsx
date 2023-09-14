import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { SelectContainer } from './select_styles'
import { makeStyles } from '@mui/styles'

interface SelectDeatails {
  label: string
  menu: string[]
}

const useStyles = makeStyles({
  root: {
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.60)',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, 0.60)',
    },
    '& .MuiInputBase-root': {
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '15px',
      background: '#FFF',
    },
  },
})
function FormSelect({ label, menu }: SelectDeatails) {
  const classes = useStyles()

  return (
    <SelectContainer>
      <FormControl
        fullWidth
        sx={{ borderRadius: '15px' }}
        className={classes.root}
      >
        <InputLabel>{label}</InputLabel>
        <Select label={label} autoWidth={true}>
          {menu.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectContainer>
  )
}

export default FormSelect
