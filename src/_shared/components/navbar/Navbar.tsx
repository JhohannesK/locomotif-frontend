import {
  LinkContainer,
  LinkStyles,
  LogoStyles,
  MenuIcon,
  NavBarMobileContainer,
  NavBarRightBox,
  NavBarRightContent,
  NavBarRightIcons,
  NavbarStyle,
  ProfileAvartar,
  SearchIcon,
  Wrapper,
} from './navbarStyles'
import image from '../../assets/user.jpeg'
import { BiBriefcase, BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { FiBell } from 'react-icons/fi'
import { RiLayoutGridFill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import { FaClockRotateLeft } from 'react-icons/fa6'
import { PiChartLineUpBold, PiClipboardTextLight } from 'react-icons/pi'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { routhPaths } from '../../../routes'
import { useDispatch } from 'react-redux'
import { setHomepage } from '../../../pages/Personnel/personnel-home-page/slice/personnelSlice'
import Constants from '../../../utils/constants'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import LeftSidebar from '../sidebar/LeftSidebar'
import { Tooltip } from '@mui/material'
import { IoIosArrowDown } from 'react-icons/io'
import ProfileMenu from './components/ProfileMenu'
import AvatarDisplay from '../Avatar/Avatar'

interface linksObject {
  name: string
  path: string
  icon: ReactNode
}

const Navbar = ({ type }: { type: 'personnel' | 'facility' }) => {
  const dispatch = useDispatch()
  const NavNames = Constants.NAVBAR.Personnel

  const facilityLinks: linksObject[] = useMemo(
    () => [
      { name: 'Overview', path: '', icon: <RiLayoutGridFill /> },
      { name: 'History', path: '', icon: <FaClockRotateLeft /> },
      { name: 'Analysis', path: '', icon: <PiChartLineUpBold /> },
      { name: 'Profile', path: '', icon: <FaUserAlt /> },
    ],
    []
  )

  const personnelLinks: linksObject[] = useMemo(
    () => [
      {
        name: NavNames.FINDJOB,
        path: routhPaths.PAGES.PERSONNEL.personnel_findJob,
        icon: <BiBriefcase />,
      },
      { name: NavNames.FINDFACILITY, path: '', icon: <AiOutlineFileSearch /> },
      {
        name: NavNames.APPLICATIONS,
        path: routhPaths.PAGES.PERSONNEL.personnel_applications_page,
        icon: <PiClipboardTextLight />,
      },
      { name: NavNames.PROFILE, path: '', icon: <FaUserAlt /> },
    ],
    [
      NavNames.APPLICATIONS,
      NavNames.FINDFACILITY,
      NavNames.FINDJOB,
      NavNames.PROFILE,
    ]
  )

  const [linksHolder, setLinksHolder] = useState<linksObject[]>([])
  const [isLeftPaneOpen, setIsLeftPaneOpen] = useState<boolean>(false)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

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
    <Wrapper>
      <NavBarMobileContainer>
        <ConditionRenderComponent renderIf={isLeftPaneOpen}>
          <LeftSidebar
            closePane={handleLeftPane}
            menu={linksHolder}
            type={type}
          />
        </ConditionRenderComponent>
        <MenuIcon onClick={handleLeftPane}>
          <BiMenuAltLeft size={28} />
        </MenuIcon>
        <LogoStyles>Loco</LogoStyles>
        <SearchIcon>
          <BiSearchAlt size={28} />
        </SearchIcon>
      </NavBarMobileContainer>
      <NavbarStyle>
        <LogoStyles>Loco</LogoStyles>
        <LinkContainer>
          {linksHolder.map((linkObject, index) => {
            return (
              <LinkStyles
                key={index}
                to={linkObject.path}
                onClick={() => dispatch(setHomepage(index + 1))}
              >
                {linkObject.name}
              </LinkStyles>
            )
          })}
        </LinkContainer>
        <NavBarRightContent>
          <NavBarRightBox>
            <NavBarRightIcons>
              <RxEnvelopeClosed size={23} />
              <FiBell size={23} />
            </NavBarRightIcons>
            <Tooltip title="Open settings">
              <ProfileAvartar onClick={handleOpenUserMenu}>
                <AvatarDisplay height={40} width={40} imageSrc={image} />
                <NavBarRightIcons>
                  <IoIosArrowDown size={20} />
                </NavBarRightIcons>
              </ProfileAvartar>
            </Tooltip>
            <ProfileMenu
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          </NavBarRightBox>
        </NavBarRightContent>
      </NavbarStyle>
    </Wrapper>
  )
}

export default Navbar
