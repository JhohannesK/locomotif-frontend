/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import {
  Select as BaseSelect,
  SelectRootSlotProps,
  SelectProps,
  SelectListboxSlotProps,
} from '@mui/base/Select'
import {
  Option as BaseOption,
  OptionProps,
  OptionOwnerState,
} from '@mui/base/Option'
import clsx from 'clsx'
import { PopupContext } from '@mui/base/Unstable_Popup'
import { CssTransition } from '@mui/base/Transitions'
import { CgArrowAlignV } from 'react-icons/cg'

export default function LocoSelect({
  options,
  placeholder,
  name,
  value,
  onChange,
}: {
  options: string[]
  placeholder?: string
  defaultOption?: string
  name: string
  value?: string | null
  onChange?: (
    event:
      | React.MouseEvent<Element, MouseEvent>
      | React.KeyboardEvent<Element>
      | React.FocusEvent<Element, Element>
      | null,
    value: {} | null
  ) => void
}) {
  // Replace this with your app logic for determining dark modes
  //   const isDarkMode = useIsDarkMode()
  return (
    <div className={'w-full '}>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        // defaultValue={defaultOption}
        placeholder={placeholder}
      >
        {options.map((option, index) => {
          return (
            <Option key={index} value={option}>
              {option}
            </Option>
          )
        })}
      </Select>
    </div>
  )
}

const getOptionColorClasses = ({
  selected,
  highlighted,
  disabled,
}: Partial<OptionOwnerState<number>>) => {
  let classes = ''
  if (disabled) {
    classes += 'text-slate-400 dark:text-slate-700'
  } else {
    if (selected) {
      classes += ' bg-background-primary text-white'
    } else if (highlighted) {
      classes +=
        ' bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-300'
    }
    classes +=
      ' hover:dark:bg-slate-800 hover:bg-slate-100 hover:dark:text-slate-300 hover:text-slate-900'
    classes +=
      ' focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:dark:outline-purple-300'
  }
  return classes
}

const Option = React.forwardRef<HTMLLIElement, OptionProps<string>>(
  (props, ref) => {
    return (
      <BaseOption
        ref={ref}
        {...props}
        slotProps={{
          root: ({ selected, highlighted, disabled }) => ({
            className: `list-none p-2 rounded-lg cursor-default last-of-type:border-b-0 ${getOptionColorClasses(
              { selected, highlighted, disabled }
            )}`,
          }),
        }}
      />
    )
  }
)

const Button = React.forwardRef(function Button<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ...other } = props
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <CgArrowAlignV />
    </button>
  )
})

const AnimatedListbox = React.forwardRef(function AnimatedListbox<
  Value extends {},
  Multiple extends boolean,
>(
  props: SelectListboxSlotProps<Value, Multiple>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const { ...other } = props
  const popupContext = React.useContext(PopupContext)

  if (popupContext == null) {
    throw new Error(
      'The `AnimatedListbox` component cannot be rendered outside a `Popup` component'
    )
  }

  const verticalPlacement = popupContext.placement.split('-')[0]

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <ul {...other} ref={ref} />
    </CssTransition>
  )
})

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === 'function' ? fn(args) : fn

const Select = React.forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  // Replace this with your app logic for determining dark modes
  //   const isDarkMode = useIsDarkMode()

  return (
    <BaseSelect
      ref={ref}
      {...props}
      slots={{
        root: Button,
        listbox: AnimatedListbox,
        ...props.slots,
      }}
      className={clsx('CustomSelect', props.className)}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          )
          return {
            ...resolvedSlotProps,
            className: clsx(
              `relative text-sm font-sans box-border w-full px-3 py-2 rounded-lg text-left bg-white dark:bg-neutral-900 border border-solid border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-neutral-300 transition-all hover:bg-slate-50 dark:hover:bg-neutral-800 outline-0 shadow-md shadow-slate-100 dark:shadow-slate-900 ${
                ownerState.focusVisible
                  ? 'focus-visible:ring-4 ring-purple-500/30 focus-visible:border-purple-500 focus-visible:dark:border-purple-500'
                  : ''
              } [&>svg]:text-base	[&>svg]:absolute [&>svg]:h-full [&>svg]:top-0 [&>svg]:right-2.5`,
              resolvedSlotProps?.className
            ),
          }
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          )
          return {
            ...resolvedSlotProps,
            className: clsx(
              `text-sm font-sans p-1.5 my-3 w-full rounded-xl overflow-auto max-h-[400px] outline-0 bg-white dark:bg-slate-900 border border-solid border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 shadow shadow-slate-200 dark:shadow-slate-900 [.open_&]:opacity-100 [.open_&]:scale-100 transition-[opacity,transform] [.closed_&]:opacity-0 [.closed_&]:scale-90 [.placement-top_&]:origin-bottom [.placement-bottom_&]:origin-top`,
              resolvedSlotProps?.className
            ),
          }
        },
        popup: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.popup,
            ownerState
          )
          return {
            ...resolvedSlotProps,
            className: clsx(` '' z-10`, resolvedSlotProps?.className),
          }
        },
      }}
    />
  )
})
