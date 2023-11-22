import {
  LinkContainer,
  LinkStyles,
  LogoStyles,
  MenuIcon,
  NavBarMobileContainer,
  NavBarRightBox,
  NavBarRightContent,
  NavBarRightIcons,
  NavBarUserImage,
  NavbarStyle,
  SearchIcon,
  Wrapper,
} from './navbarStyles'
import image from '../../assets/user.jpeg'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../../store'
import {
  BiBriefcase,
  BiDoorOpen,
  BiMenuAltLeft,
  BiSearchAlt,
} from 'react-icons/bi'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { FiBell } from 'react-icons/fi'
import { RiLayoutGridFill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import { FaClockRotateLeft } from 'react-icons/fa6'
import { PiChartLineUpBold, PiClipboardTextLight } from 'react-icons/pi'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { AiOutlineFileSearch, AiOutlineUser } from 'react-icons/ai'
import { routhPaths } from '../../../routes'
import { useDispatch } from 'react-redux'
import { setHomepage } from '../../../pages/Personnel/personnel-home-page/slice/personnelSlice'
import Constants from '../../../utils/constants'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import LeftSidebar from '../sidebar/LeftSidebar'
import { Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { logoutPersonnel } from '../../../pages/auth/slice/authSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../../../redux/store'

interface linksObject {
  name: string
  path: string
  icon: ReactNode
}

const Navbar = ({ type }: { type: 'personnel' | 'facility' }) => {
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
        path: routhPaths.PERSONNEL.personnel_dashboard,
        icon: <BiBriefcase />,
      },
      { name: NavNames.FINDFACILITY, path: '', icon: <AiOutlineFileSearch /> },
      {
        name: NavNames.APPLICATIONS,
        path: routhPaths.PERSONNEL.personnel_applications_page,
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
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>()

  const settings = [
    {
      name: 'Open Profile',
      icon: <AiOutlineUser />,
      onClick: () => {},
    },
    {
      name: 'Log out',
      icon: <BiDoorOpen />,
      onClick: () => {},
    },
  ]

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
            <NavBarUserImage onClick={handleOpenUserMenu}>
              <Tooltip title="Open settings">
                <img
                  src={image}
                  alt="user icon"
                  style={{
                    height: '1.9rem',
                    width: '1.9rem',
                    objectFit: 'cover',
                  }}
                />
              </Tooltip>
            </NavBarUserImage>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    dispatch(logoutPersonnel())
                    // localStorage.clear()
                    handleCloseUserMenu()
                  }}
                  sx={{ gap: '10px' }}
                >
                  {setting.icon}
                  <Typography fontSize={'16px'} textAlign="center">
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </NavBarRightBox>
          {/* 
          <NavBarUserName>{authResponse.first_name ?? 'user'}</NavBarUserName> */}
        </NavBarRightContent>
      </NavbarStyle>
    </Wrapper>
  )
}

export default Navbar
