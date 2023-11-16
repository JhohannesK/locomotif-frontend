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

  const dispatch = useDispatch()
  return (
    <Wrapper>
      <NavBarMobileContainer>
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
            <NavBarUserImage>
              <img
                src={image}
                alt="user icon"
                style={{
                  height: '1.9rem',
                  width: '1.9rem',
                  objectFit: 'cover',
                }}
              />
            </NavBarUserImage>
          </NavBarRightBox>
          {/* 
          <NavBarUserName>{authResponse.first_name ?? 'user'}</NavBarUserName> */}
        </NavBarRightContent>
      </NavbarStyle>
    </Wrapper>
  )
  //   // <NavBar>
  //   //   {isLeftPaneOpen ? (
  //   //     <NavbarLeftPaneMenu closePane={handleLeftPane} menu={linksHolder} />
  //   //   ) : (
  //   //
  //   //   )}
  //   //   <div>hello</div>
  //     {/* <NavBarLaptopContainer>
  //       <LeftStyles>
  //         <LogoStyles>Loco</LogoStyles>
  //         <Navbarlinks>
  //           {linksHolder.map((linkObject, index) => {
  //             return (
  //               <LinkStyles key={index} to={linkObject.path}>
  //                 {linkObject.link}
  //               </LinkStyles>
  //             )
  //           })}
  //         </Navbarlinks>
  //       </LeftStyles>
  //       <NavBarRightContent>
  //         <NavBarRightBox>
  //           <NavBarRightIcons>
  //             <RxEnvelopeClosed size={23} />
  //             <FiBell size={23} />
  //           </NavBarRightIcons>
  //           <NavBarUserImage>
  //             <img
  //               src={image}
  //               alt="user icon"
  //               style={{ height: '100%', width: '100%', objectFit: 'cover' }}
  //             />
  //           </NavBarUserImage>
  //         </NavBarRightBox>

  //         {/* <NavBarUserName>{authResponse.first_name ?? 'user'}</NavBarUserName> */}
  //     {/* </NavBarRightContent>
  //     </NavBarLaptopContainer>  */}
  //   // </NavBar>
  // // )
}

export default Navbar
