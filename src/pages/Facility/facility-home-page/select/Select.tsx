import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { SelectContainer } from './select_styles'

interface SelectDeatails {
  label: string
  menu: string[]
}
function FormSelect({ label, menu }: SelectDeatails) {
  return (
    <SelectContainer>
      <FormControl fullWidth>
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
