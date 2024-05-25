import React from 'react'
import Navbar from '../../_shared/navbar/Navbar'
import Constants from '@/utils/constants'
import AviDropdown from '@/_shared/navbar/FacilityAvi'
import { CreditCard, LogOut, UserIcon } from 'lucide-react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-background-secondary">
      <Navbar
        navlinks={Constants.FACILITYNAVLINKS}
        aviDropdown={
          <AviDropdown
            menu={[
              <>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </>,
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </>,
              <>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </>,
            ]}
          />
        }
      />
      <div className="p-2 lg:p-10 bg-background-secondary">{children}</div>
    </div>
  )
}

export default Layout
