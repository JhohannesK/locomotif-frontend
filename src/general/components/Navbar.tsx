import {
  NavBar,
  NavBarContainer,
  NavBarRightContent,
  NavBarUserImage,
  NavBarUserName,
} from './navbarStyles'
import image from '../../assets/user.jpeg'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Navbar = () => {
  const authResponse = useSelector(
    (state: RootState) => state.auth.authResponse
  )

  console.log(authResponse)
  return (
    <NavBar>
      <NavBarContainer>
        <div>Locomotif</div>
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
      </NavBarContainer>
    </NavBar>
  )
}

export default Navbar
