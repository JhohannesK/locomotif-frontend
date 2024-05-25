import { Avatar } from '@mui/material'
import { AiOutlineMail } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import LocoDropdown from '../components/Dropdown'
import { CreditCard, LogOut, UserIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="w-full bg-white sticky top-0 z-20">
      <div className="py-3 lg:py-5 px-10 flex flex-row items-center justify-between">
        <div className="font-bold text-xl bg-background-primary py-1 px-2 text-white rounded-xl">
          Loco
        </div>
        <div className="hidden lg:flex flex-row gap-4">
          {navLinks.map((link, index) => (
            <a
              href={link.to}
              key={index}
              className="text-lg font-bold text-black hover:text-background-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div>
          <div className="flex flex-row gap-3 items-center justify-center">
            <AiOutlineMail className="text-2xl opacity-60" />
            <BiBell className="text-2xl opacity-60" />
            <LocoDropdown
              trigger={
                <Avatar
                  sx={{
                    height: '2rem',
                    width: '2rem',
                    fontWeight: 'bold',
                    fontSize: '12px',
                  }}
                >
                  GM
                </Avatar>
              }
              label="My account"
              menuItem={[
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

const navLinks = [
  {
    name: 'Overview',
    to: '/facility',
  },
  {
    name: 'Applications',
    to: '/applications',
  },
  {
    name: 'Analysis',
    to: '/applications',
  },
  {
    name: 'Profile',
    to: '/applications',
  },
]
