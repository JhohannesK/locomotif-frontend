import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import {
  OutlinedInput,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material'
import { colors } from '../../../colors'
import { SxProps } from '@mui/system'

export default function GenericSelect({
  label,
  data,
  // sx,
}: SelectProps & {
  label?: string
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
        value={age}
        input={<OutlinedInput key={label} />}
        inputProps={{
          style: {
            borderRadius: '10px',
          },
        }}
        // sx={{ borderRadius: '10px', height: '3rem', ...sx }}
        onChange={handleChange}
      >
        <MenuItem disabled>none</MenuItem>
        {data.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
