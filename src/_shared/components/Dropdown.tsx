import { FormControlLabel, Radio } from '@mui/material'
import { CheckedRadioBtn, RadioBtn } from '..'
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'

const LocoDropdown = ({ items, title }: { items: string[]; title: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <GroupCard>
      <HeaderArrow onClick={() => setOpen(!open)}>
        <div>
          <p style={{ fontSize: '18px' }}>{title}</p>
        </div>
        <div>{open ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
      </HeaderArrow>
      <ListContainer open={open}>
        {/* <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Full time"
          name="radio-buttons-group"
        > */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {items.map((item, index) => (
            <FormControlLabel
              key={index}
              label={item}
              value={item}
              control={
                <Radio
                  icon={<RadioBtn height="1.5rem" width="1.5rem" />}
                  checkedIcon={
                    <CheckedRadioBtn outerRadius="1.1rem" innerRadius=".5rem" />
                  }
                />
              }
            />
          ))}
        </div>
        {/* </RadioGroup> */}
      </ListContainer>
    </GroupCard>
  )
}

export default LocoDropdown

const GroupCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: default;
  width: 100%;
  margin-top: 1rem;
`

const HeaderArrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`

const ListContainer = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  /* transition: all 0.3s ease-in-out;
  animation-duration: 200ms; */
`
