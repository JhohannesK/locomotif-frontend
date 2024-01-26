import { RxCross1 } from 'react-icons/rx'
import {
  LogoStyles,
  NavbarHeaderIcon,
  NavbarMenu,
  NavbarMenuHeader,
  NavbarOptionLeft,
  NavbarOptionRight,
  NavbarOptions,
  NavbarOptionsBox,
  NavbarOptionsH3,
  NavbarOptionsIcon,
} from './navbarStyles'
import { ReactNode } from 'react'

interface linksObject {
  name: string
  path: string
  icon: ReactNode
}

function NavbarLeftPaneMenu({
  closePane,
  menu,
}: {
  closePane: () => void
  menu: linksObject[]
}) {
  return (
    <>
      <NavbarMenu>
        <NavbarMenuHeader>
          <LogoStyles>Locomotif</LogoStyles>
          <NavbarHeaderIcon onClick={() => closePane()}>
            <RxCross1 stroke-width="1" />
          </NavbarHeaderIcon>
        </NavbarMenuHeader>
        <NavbarOptionsBox>
          {menu.map((linkObject, index) => {
            return (
              <NavbarOptions key={index} to={linkObject.path}>
                <NavbarOptionLeft>
                  <NavbarOptionsIcon>{linkObject.icon}</NavbarOptionsIcon>
                </NavbarOptionLeft>
                <NavbarOptionRight>
                  <NavbarOptionsH3>{linkObject.name}</NavbarOptionsH3>
                </NavbarOptionRight>
              </NavbarOptions>
            )
          })}
        </NavbarOptionsBox>
      </NavbarMenu>
    </>
  )
}

export default NavbarLeftPaneMenu
