import React from 'react'
import Navbar from '../../_shared/navbar/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-background-secondary">
      <Navbar />
      <div className="p-2 lg:p-10 bg-background-secondary">{children}</div>
    </div>
  )
}

export default Layout
