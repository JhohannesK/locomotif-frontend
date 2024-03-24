/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { Input as BaseInput, InputProps } from '@mui/base/Input'
import { useTheme } from '@mui/system'
import clsx from 'clsx'
import { Controller } from 'react-hook-form'

export default function LocoInput({
  placeholder,
  type,
  value,
  onChange,
  name,
}: {
  placeholder: string
  type?: React.HTMLInputTypeAttribute
  name: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Input
          {...field}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          aria-label={'Loco input'}
          placeholder={placeholder}
        />
      )}
    />
  )
}

function useIsDarkMode() {
  const theme = useTheme()
  return theme.palette.mode === 'dark'
}

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === 'function' ? fn(args) : fn

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // Replace this with your app logic for determining dark modes
  const isDarkMode = useIsDarkMode()

  return (
    <BaseInput
      ref={ref}
      {...props}
      className={clsx(isDarkMode ? 'dark' : '', props.className)}
      slotProps={{
        ...props.slotProps,
        input: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.input,
            ownerState
          )
          return {
            ...resolvedSlotProps,
            className: clsx(
              'w-full text-sm font-normal h-10 font-sans leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-border-active focus:border-border-active bg-white dark:bg-slate-900 text-slate-900 focus-visible:outline-0',
              resolvedSlotProps?.className
            ),
          }
        },
      }}
    />
  )
})
