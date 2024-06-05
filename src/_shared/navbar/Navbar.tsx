import { AiOutlineMail } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({
  aviDropdown,
  navlinks,
}: {
  aviDropdown: React.ReactNode
  navlinks: Array<{ name: string; to: string }>
}) => {
  return (
    <div className="w-full bg-white sticky top-0 z-20">
      <div className="py-3 lg:py-5 px-10 flex flex-row items-center justify-between">
        <div className="font-bold text-xl bg-background-primary py-1 px-2 text-white rounded-xl">
          Loco
        </div>
        <div className="hidden lg:flex flex-row gap-4">
          {navlinks.map((link, index: number) => (
            <NavLink
              to={link.to}
              key={index}
              className={({ isActive }) => {
                return isActive
                  ? 'text-lg font-bold text-text-secondary hover:text-background-primary'
                  : 'text-lg font-bold text-black hover:text-background-primary'
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div>
          <div className="flex flex-row gap-3 items-center justify-center">
            <AiOutlineMail className="text-2xl opacity-60" />
            <BiBell className="text-2xl opacity-60" />
            {aviDropdown}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
