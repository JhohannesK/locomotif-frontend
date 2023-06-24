import {
  LogoStyles,
  MenuIcon,
  NavBar,
  NavBarLaptopContainer,
  NavBarMobileContainer,
  NavBarRightContent,
  NavBarUserImage,
  NavBarUserName,
  SearchIcon,
} from './navbarStyles'
import image from '../../assets/user.jpeg'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi'

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
        <NavBarRightContent>
          <NavBarUserImage>
            <img
              src={image}
              alt="health-leaf icon"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </NavBarUserImage>

          <NavBarUserName>{authResponse.first_name ?? 'user'}</NavBarUserName>
        </NavBarRightContent>
      </NavBarLaptopContainer>
    </NavBar>
  )
}

export default Navbar
