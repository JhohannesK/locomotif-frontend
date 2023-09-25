import React from 'react'
import Sidebar from './sidebar/Sidebar'
import styled from 'styled-components'
import { colors } from '../../../colors'

const steps = [
  'Personal Information',
  'Contact Information',
  'Account Information',
]

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutStyles>
      <Sidebar steps={steps} />
      <div>{children}</div>
    </LayoutStyles>
  )
}

export default Layout

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
  background-color: ${colors.background.whiteSmoke};
`
