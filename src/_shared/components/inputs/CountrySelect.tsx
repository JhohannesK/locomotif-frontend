import * as React from 'react'
import { Select as BaseSelect, selectClasses } from '@mui/base/Select'
import { Option as BaseOption, optionClasses } from '@mui/base/Option'
import { styled } from '@mui/system'
import { CgArrowAlignV } from 'react-icons/cg'
import countries from '../../../utils/module/countries.json'

export default function CountrySelect({
  name,
  value,
  onChange,
}: {
  name: string
  value?: string
  onChange?: (
    event:
      | React.MouseEvent<Element, MouseEvent>
      | React.KeyboardEvent<Element>
      | React.FocusEvent<Element, Element>
      | null,
    value: unknown | null
  ) => void
}) {
  return (
    // @ts-expect-error Screams because buttons are not allowed to have placeholder
    <Select
      value={value}
      onChange={onChange}
      name={name}
      placeholder="Select country…"
    >
      {countries.map((country) => (
        <Option
          key={country.code}
          value={country.code}
          className="flex gap-2"
          label={country.label}
        >
          <img
            loading="lazy"
            width={20}
            height={14}
            srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
            alt={`Flag of ${country.label}`}
          />
          {country.label} ({country.code}) +{country.phone}
        </Option>
      ))}
    </Select>
  )
}

const Select = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: Button,
    listbox: Listbox,
    popup: Popup,
    // ...props.slots,
  }
  // @ts-expect-error dky
  return <BaseSelect {...props} ref={ref} slots={slots} />
})

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
}

const Button = React.forwardRef(function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
  ref: React.Ref<HTMLButtonElement>
) {
  const { children, ...other } = props
  return (
    <StyledButton type="button" {...other} ref={ref}>
      {children}
      <CgArrowAlignV />
    </StyledButton>
  )
})

const StyledButton = styled('button', { shouldForwardProp: () => true })(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  position: relative;
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `
)

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  max-height: 400px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 2px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
  };
  `
)

const Option = styled(BaseOption)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &:focus-visible {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  & img {
    margin-right: 10px;
  }
  `
)

const Popup = styled('div')`
  z-index: 1;
`
