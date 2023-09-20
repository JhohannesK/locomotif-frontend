import { RxCross1 } from 'react-icons/rx'
import LeftPaneProfile from '../LeftPaneProfile/LeftPaneProfile'
import WeeklySummary from '../WeeklySummary/WeeklySummary'
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
import {
  FacilityLeftLowerContent,
  FacilityLeftMidContent,
  FacilityLeftUpperContent,
} from '../../../pages/Facility/facility-home-page/LeftPane/styles'
import { ReactNode } from 'react'

interface linksObject {
  link: string
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
            <RxCross1 />
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
                  <NavbarOptionsH3>{linkObject.link}</NavbarOptionsH3>
                </NavbarOptionRight>
              </NavbarOptions>
            )
          })}
        </NavbarOptionsBox>

        <FacilityLeftUpperContent>
          <LeftPaneProfile
            name="Ridge Hospital"
            jobTitle="Cardiac Hospital"
            workExperience="Airport, Accra"
          />
        </FacilityLeftUpperContent>
        <FacilityLeftMidContent>
          <WeeklySummary
            numberOfNewCandidates={3}
            numberOfProcessingApplications={2}
            numberOfAvailableJobs={1}
          />
        </FacilityLeftMidContent>
        <FacilityLeftLowerContent></FacilityLeftLowerContent>
      </NavbarMenu>
    </>
  )
}

// interface LeftPaneProps {};
export default NavbarLeftPaneMenu
