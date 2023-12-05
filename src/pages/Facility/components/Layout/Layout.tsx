import styled from 'styled-components'
import { Navbar } from '../../../../_shared'
import { colors } from '../../../../colors'
import Constants from '../../../../utils/constants'
import { Outlet } from 'react-router-dom'
import FacilityLeftPane from '../LeftPane/LeftPane'
import MiddlePane from '../MIddlePane/MiddlePane'

const FacilityLayout = () => {
  return (
    <LayoutWrapper>
      <Navbar type="facility" />
      <ChildrenWrapper>
        <Outlet />
      </ChildrenWrapper>
    </LayoutWrapper>
  )
}

export default FacilityLayout

FacilityLayout.LeftPane = FacilityLeftPane
FacilityLayout.Overview = MiddlePane

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
  margin: 3rem 3rem 0 3rem;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    margin: 1rem;
  }
`
