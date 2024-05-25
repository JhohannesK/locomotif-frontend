import LocoDropdown from '../components/Dropdown'
import { Avatar } from '@mui/material'
import React from 'react'

const AviDropdown = ({ menu }: { menu: React.ReactNode[] }) => {
  return (
    <LocoDropdown
      trigger={
        <Avatar
          sx={{
            height: '2rem',
            width: '2rem',
            fontWeight: 'bold',
            fontSize: '12px',
          }}
        >
          GM
        </Avatar>
      }
      label="My account"
      menuItem={menu}
    />
  )
}

export default AviDropdown
