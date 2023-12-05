import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { OutlinedInput, SxProps } from '@mui/material'
import { colors } from '../../../colors'

export default function GenericSelect({
  label,
  data,
}: SelectProps & {
  label: string
  data: string[]
  name?: string
  defaultValue?: string
  multiple?: boolean
  sx?: SxProps
}) {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <FormControl sx={{ width: '100%' }} size="small" key={label}>
      <InputLabel sx={{ background: `${colors.background.whiteSmoke}`, px: 1 }}>
        {label}
      </InputLabel>
      <Select
        key={label}
        id="demo-select-small"
        value={age}
        label={label}
        onChange={handleChange}
        input={<OutlinedInput key={label} />}
      >
        <MenuItem disabled>none</MenuItem>
        {data.map((item: string, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
