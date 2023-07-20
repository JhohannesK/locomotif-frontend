import Footer from './components/Footer'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import { colors } from '../colors'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
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
