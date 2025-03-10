import AviDropdown from '@/_shared/navbar/FacilityAvi'
import Navbar from '@/_shared/navbar/Navbar'
import Constants from '@/utils/constants'
import { useNavigate } from '@tanstack/react-router'
import { CreditCard, LogOut, UserIcon } from 'lucide-react'
import React from 'react'

const PersonnelRootLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  return (
    <main className="flex flex-col h-screen bg-background-secondary">
      <Navbar
        navlinks={Constants.PERSONNELNAVLINKS}
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
              <div
                className="flex"
                onClick={() =>
                  navigate({
                    to: '/',
                  })
                }
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </div>,
            ]}
          />
        }
      />
      <div className="p-8 lg:p-10 bg-background-secondary"> {children}</div>
    </main>
  )
}

export default PersonnelRootLayout
