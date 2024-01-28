import styled from 'styled-components'
import { Navbar } from '../../_shared'
import React from 'react'
import { colors } from '../../colors'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWrapper>
      <Navbar type="facility" />
      {children}
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${colors.background.whiteSmoke};
  overflow-y: scroll;
`
