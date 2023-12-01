import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { SxProps } from '@mui/material'

export default function GenericSelect({
  label,
  data,
  sx,
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
    <FormControl sx={{ ...sx, m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label={label}
        onChange={handleChange}
      >
        <MenuItem disabled>none</MenuItem>
        {data.map((item: string) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
