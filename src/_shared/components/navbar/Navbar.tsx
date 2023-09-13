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
import { BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { FiBell } from 'react-icons/fi'
import { useEffect, useMemo, useState } from 'react'

interface linksObject {
  link: string
  path: string
}

const Navbar = ({ type }: { type: 'personnel' | 'facility' }) => {
  // const authResponse = useSelector(
  //   (state: RootState) => state.auth.authResponse
  // )

  // Use useMemo to memoize the links
  const facilityLinks: linksObject[] = useMemo(
    () => [
      { link: 'Overview', path: '' },
      { link: 'History', path: '' },
      { link: 'Analysis', path: '' },
      { link: 'Profile', path: '' },
    ],
    []
  )

  const personnelLinks: linksObject[] = useMemo(
    () => [
      { link: 'Find Jobs', path: '' },
      { link: 'Find Facility', path: '' },
      { link: 'Applications', path: '' },
      { link: 'Profile', path: '' },
    ],
    []
  )

  const [linksHolder, setLinksHolder] = useState<linksObject[]>([])

  useEffect(() => {
    if (type === 'facility') {
      setLinksHolder(facilityLinks)
    } else {
      setLinksHolder(personnelLinks)
    }
  }, [facilityLinks, personnelLinks, type])

  return (
    <NavBar>
      <NavBarMobileContainer>
        <MenuIcon>
          <BiMenuAltLeft size={28} />
        </MenuIcon>
        <LogoStyles>Locomotif</LogoStyles>
        <SearchIcon>
          <BiSearchAlt size={28} />
        </SearchIcon>
      </NavBarMobileContainer>

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
                alt="health-leaf icon"
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
