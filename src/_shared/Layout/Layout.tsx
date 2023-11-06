import React from 'react'
import Navbar from '../components/navbar/Navbar'
import styled from 'styled-components'
import { colors } from '../../colors'
import Constants from '../../utils/constants'
import { LeftSide } from '../../pages/Personnel/personnel-home-page/components/LeftPane'
import PersonnelMidContent from '../../pages/Personnel/personnel-home-page/components/PersonnelMidContent'
import ConfirmationModal from '../../pages/Personnel/components/modal/ConfirmationModal'
import LayoutProvider from './context/LayoutContext'
import FilterPane from '../../pages/Personnel/personnel-home-page/components/filter'

const Layout = ({
  children,
  dashboardType,
}: {
  children: React.ReactNode
  dashboardType: 'personnel' | 'facility'
}) => {
  return (
    <LayoutProvider>
      <LayoutWrapper>
        <Navbar type={dashboardType} />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </LayoutWrapper>
    </LayoutProvider>
  )
}

export default Layout

Layout.LeftSide = LeftSide
Layout.PersonnelMidContent = PersonnelMidContent
Layout.ConfirmationModal = ConfirmationModal
Layout.PersonnelFilter = FilterPane

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  margin: 0 auto;
  background-color: ${colors.background.antiflashWhite};
`

const ChildrenWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 3rem 3rem;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    margin: 1rem;
  }
`
