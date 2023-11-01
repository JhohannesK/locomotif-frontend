import {
  LinkStyles,
  LogoStyles,
  MenuIcon,
  NavBar,
  NavBarLaptopContainer,
  NavBarMobileContainer,
  NavBarRightBox,
  NavBarRightContent,
  NavBarRightIcons,
  NavBarUserImage,
  Navbarlinks,
  SearchIcon,
} from './navbarStyles'
import image from '../../assets/user.jpeg'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../../store'
import { BiBriefcase, BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { FiBell } from 'react-icons/fi'
import { RiLayoutGridFill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import { FaClockRotateLeft } from 'react-icons/fa6'
import { PiChartLineUpBold, PiClipboardTextLight } from 'react-icons/pi'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import NavbarLeftPaneMenu from './LeftPaneMenu'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { routhPaths } from '../../../routes'

interface linksObject {
  link: string
  path: string
  icon: ReactNode
}

const Navbar = ({ type }: { type: 'personnel' | 'facility' }) => {
  // const authResponse = useSelector(
  //   (state: RootState) => state.auth.authResponse
  // )

  // Use useMemo to memoize the links
  const facilityLinks: linksObject[] = useMemo(
    () => [
      { link: 'Overview', path: '', icon: <RiLayoutGridFill /> },
      { link: 'History', path: '', icon: <FaClockRotateLeft /> },
      { link: 'Analysis', path: '', icon: <PiChartLineUpBold /> },
      { link: 'Profile', path: '', icon: <FaUserAlt /> },
    ],
    []
  )

  const personnelLinks: linksObject[] = useMemo(
    () => [
      {
        link: 'Find Jobs',
        path: routhPaths.PERSONNEL.personnel_dashboard,
        icon: <BiBriefcase />,
      },
      { link: 'Find Facility', path: '', icon: <AiOutlineFileSearch /> },
      {
        link: 'Applications',
        path: routhPaths.PERSONNEL.personnel_applications_page,
        icon: <PiClipboardTextLight />,
      },
      { link: 'Profile', path: '', icon: <FaUserAlt /> },
    ],
    []
  )

  const [linksHolder, setLinksHolder] = useState<linksObject[]>([])
  const [isLeftPaneOpen, setIsLeftPaneOpen] = useState<boolean>(false)

  useEffect(() => {
    if (type === 'facility') {
      setLinksHolder(facilityLinks)
    } else {
      setLinksHolder(personnelLinks)
    }
  }, [facilityLinks, personnelLinks, type])

  const handleLeftPane = () => {
    setIsLeftPaneOpen(!isLeftPaneOpen)
  }
  return (
    <NavBar>
      {isLeftPaneOpen ? (
        <NavbarLeftPaneMenu closePane={handleLeftPane} menu={linksHolder} />
      ) : (
        <NavBarMobileContainer>
          <MenuIcon onClick={handleLeftPane}>
            <BiMenuAltLeft size={28} />
          </MenuIcon>
          <LogoStyles>Locomotif</LogoStyles>
          <SearchIcon>
            <BiSearchAlt size={28} />
          </SearchIcon>
        </NavBarMobileContainer>
      )}

      <NavBarLaptopContainer>
        <LogoStyles>Locomotif</LogoStyles>
        <Navbarlinks>
          {linksHolder.map((linkObject, index) => {
            return (
              <LinkStyles key={index} to={linkObject.path}>
                {linkObject.link}
              </LinkStyles>
            )
          })}
        </Navbarlinks>
        <NavBarRightContent>
          <NavBarRightBox>
            <NavBarRightIcons>
              <RxEnvelopeClosed />
            </NavBarRightIcons>
            <NavBarRightIcons>
              <FiBell />
            </NavBarRightIcons>
            <NavBarUserImage>
              <img
                src={image}
                alt="user icon"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </NavBarUserImage>
          </NavBarRightBox>

          {/* <NavBarUserName>{authResponse.first_name ?? 'user'}</NavBarUserName> */}
        </NavBarRightContent>
      </NavBarLaptopContainer>
    </NavBar>
  )
}

export default Navbar
