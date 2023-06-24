import { Fragment } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
