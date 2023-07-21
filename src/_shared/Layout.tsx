import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import styled from 'styled-components'
import { colors } from '../colors'
import Constants from '../utils/constants'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.background.antiflashWhite};
`

const ChildrenWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 3rem;
  max-width: 1500px;
  align-self: center;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    margin: 1rem;
  }
`
