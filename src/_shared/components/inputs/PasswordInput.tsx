/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { Input as BaseInput, InputProps } from '@mui/base/Input'
import { useTheme } from '@mui/system'
import clsx from 'clsx'
import { IconButton, InputAdornment } from '@mui/material'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

const PasswordInput = React.forwardRef(function PasswordInput(
  {
    placeholder,
    name,
    onChange,
    value,
  }: {
    placeholder: string
    name: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
  },
  ref
) {
  return (
    <Input
      ref={ref as React.RefObject<HTMLInputElement>}
      onChange={onChange}
      name={name}
      value={value}
      className="relative"
      aria-label="Demo input"
      placeholder={placeholder}
    />
  )
})

export default PasswordInput

function useIsDarkMode() {
  const theme = useTheme()
  return theme.palette.mode === 'dark'
}

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === 'function' ? fn(args) : fn

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // Replace this with your app logic for determining dark modes
  const isDarkMode = useIsDarkMode()

  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    // @ts-expect-error trying to add type to a div
    <BaseInput
      ref={ref}
      {...props}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment className="absolute top-1/2 right-4" position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? (
              <MdOutlineVisibilityOff size={20} />
            ) : (
              <MdOutlineVisibility size={20} />
            )}
          </IconButton>
        </InputAdornment>
      }
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
