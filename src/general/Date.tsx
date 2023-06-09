import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Controller, useFormContext } from 'react-hook-form'

const DesktopDateInput = ({ name }: { name: string }) => {
  const {
    control,
    // formState: { errors },
  } = useFormContext()
  return (
    <>
      <Controller
        name={name}
        control={control}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        defaultValue={null as any}
        render={({ field }) => {
          if (field?.value && typeof field?.value === 'string') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            field.value = new Date(field.value) as any // need to see if this works for all localization adaptors
          }

          return (
            <DatePicker
              // {...rest}
              {...field}
              ref={(r) => {
                field.ref(r?.querySelector('input'))
              }}

              // onClose={(...args) => {
              //   field.onBlur()
              //   if (field.onClose) {
              //     fiel.onClose(...args)
              //   }
              // }}
              // onChange={(v, keyboardInputValue) => {
              //   // console.log(v, keyboardInputValue)
              //   field.onChange(v, keyboardInputValue)
              //   if (typeof rest.onChange === 'function') {
              //     rest.onChange(v, keyboardInputValue)
              //   }
              // }}
              // slotProps={{
              //   ...slotProps,
              //   textField: {
              //     ...inputProps,
              //     required,
              //     error: !!error,
              //     helperText: error
              //       ? typeof customErrorFn === 'function'
              //         ? customErrorFn(error)
              //         : error.message
              //       : inputProps?.helperText || rest.helperText,
              //     inputProps: {
              //       ...inputProps?.inputProps,
              //       ...(textReadOnly && {
              //         readonly: true,
              //       }),
              //     },
              //   },
              // }}
            />
          )
        }}
      />
    </>
  )
}

export default DesktopDateInput
