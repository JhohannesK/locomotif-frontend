import Navbar from './components/navbar/Navbar'
import styled from 'styled-components'
import { colors } from '../colors'
import Constants from '../utils/constants'

const Layout = ({
  children,
  dashboardType,
}: {
  children: React.ReactNode
  dashboardType: 'personnel' | 'facility'
}) => {
  return (
    <LayoutWrapper>
      <Navbar type={dashboardType} />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </LayoutWrapper>
  )
}

export default Layout

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
  margin: 1rem 3rem;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    margin: 1rem;
  }
`
