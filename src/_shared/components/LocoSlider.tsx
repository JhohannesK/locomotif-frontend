/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slider as BaseSlider, sliderClasses } from '@mui/base'
import { alpha, Box, styled } from '@mui/material'
import React from 'react'

const LocoSlider = () => {
  const [value, setValue] = React.useState([20, 37])

  const handleChange = (_: unknown, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <Box sx={{ width: 300 }}>
      {/* controlled: */}
      <Slider
        value={value}
        onChange={handleChange}
        getAriaLabel={() => 'Temperature range'}
        getAriaValueText={valuetext}
        min={0}
        max={100}
      />
      {/* uncontrolled: */}
      {/* <Slider
        defaultValue={[20, 37]}
        getAriaLabel={() => 'Temperature range'}
        getAriaValueText={valuetext}
        min={0}
        max={100}
      /> */}
    </Box>
  )
}

export default LocoSlider

function valuetext(value: any) {
  return `${value}`
}

const blue = {
  100: '#b7d1cc',
  200: '#9fc2bb',
  400: '#0e5623',
  300: '#87b3aa',
  500: '#569488',
  600: '#267566',
  700: '#3e8577',
  900: '#267566',
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

const Slider = styled(BaseSlider)(
  ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
  height: 6px;
  width: 100%;
  padding: 16px 0;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &.${sliderClasses.disabled} {
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.mode === 'light' ? grey[300] : grey[600]};
    opacity: 0.4;
  }

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 6px;
    background-color: currentColor;
    opacity: 0.3;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 6px;
    background-color: currentColor;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -6px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
    transition-property: box-shadow, transform;
    transition-timing-function: ease;
    transition-duration: 120ms;
    transform-origin: center;

    &:hover {
      box-shadow: 0 0 0 6px ${alpha(
        theme.palette.mode === 'light' ? blue[200] : blue[300],
        0.3
      )};
    }

    &.${sliderClasses.focusVisible} {
      box-shadow: 0 0 0 8px ${alpha(
        theme.palette.mode === 'light' ? blue[200] : blue[400],
        0.5
      )};
      outline: none;
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 8px ${alpha(
        theme.palette.mode === 'light' ? blue[200] : blue[400],
        0.5
      )};
      outline: none;
      transform: scale(1.2);
    }
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 99%;
    background-color: ${theme.palette.mode === 'light' ? blue[200] : blue[900]};
    top: 44%;
    transform: translateX(-50%);
  }

  & .${sliderClasses.markActive} {
    background-color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
  }
`
)
