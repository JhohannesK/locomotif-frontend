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
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi'
import Constants from '../../../utils/constants'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { FiBell } from 'react-icons/fi'

const Navbar = () => {
  const authResponse = useSelector(
    (state: RootState) => state.auth.authResponse
  )

  console.log(authResponse)
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
          <LinkStyles to={Constants.ROUTES.personnel_dashboard}>
            Overview
          </LinkStyles>
          <LinkStyles to={Constants.ROUTES.personnel_dashboard}>
            History
          </LinkStyles>
          <LinkStyles to={Constants.ROUTES.personnel_dashboard}>
            Analysis
          </LinkStyles>
          <LinkStyles to={Constants.ROUTES.personnel_dashboard}>
            Profile
          </LinkStyles>
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
