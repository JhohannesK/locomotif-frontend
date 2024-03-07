import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Constants from '../../../utils/constants'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const currentRoute = window.location.pathname
  const checkWhichRoute = () => {
    const route = currentRoute.split('/')
    if (route[1] === 'personnel') {
      return Constants.SIDEBAR.PersonnelSteps
    }
    if (route[1] === 'facility') {
      return Constants.SIDEBAR.FacilitySteps
    }
    return []
  }

  const steps = checkWhichRoute()

  return (
    <div className="flex flex-grow flex-row bg-background-secondary">
      <div className="p-3 flex flex-row w-full overflow-hidden">
        <Sidebar steps={steps} />
        <div className="w-full flex items-center justify-center h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
