import { cn } from '@/utils/lib'
import { Checkbox, CheckboxProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface ICheckboxProps extends CheckboxProps {
  className?: string
}

const LocoCheckbox = ({ className, name }: ICheckboxProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name!}
      control={control}
      render={({ field }) => (
        <Checkbox
          {...field}
          className={cn(className, 'text-background-primary')}
        />
      )}
    />
  )
}

export default LocoCheckbox
