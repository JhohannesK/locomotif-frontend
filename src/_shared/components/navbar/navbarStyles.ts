import { styled } from 'styled-components'
import { colors } from '../../../colors'
import Constants from '../../../utils/constants'
import { Link } from 'react-router-dom'

export const NavBar = styled.nav`
  height: 4rem;
  border-bottom: 2px solid ${colors.background.timberwolf};
  background-color: ${colors.background.whiteSmoke};
  padding: 3px 0px;
  /* position: fixed; */
  width: 100%;
  align-self: center;
`
export const NavbarWrapper = styled.div``

export const LogoStyles = styled.div``

export const NavBarMobileContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    display: none;
  }
`
export const NavBarRightContent = styled.div`
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`
export const NavBarRightBox = styled.div`
  width: 140px;
  height: 45px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
`
export const NavBarRightIcons = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  font-size: 200%;
  opacity: 0.5;
  cursor: pointer;
`

export const Navbarlinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 100%;
`

export const LinkStyles = styled(Link)`
  text-decoration: none;
  color: ${colors.button.pineGreen};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%;
  position: relative;

  &:hover:after {
    content: '';
    position: absolute;
    bottom: -20px;
    height: 4px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    background: ${colors.button.pineGreen};
    left: 0;
  }
`

export const NavBarUserName = styled.h2`
  font-size: 1.2rem;
  color: ${colors.button.pineGreen};
`

export const NavBarUserImage = styled.div`
  outline: 1px solid orange;
  height: 3rem;
  width: 3rem;
  clip-path: circle();
  background-color: red;
  margin-right: 10px;
  background-size: cover;
  background-position: center center;
`

export const NavBarLaptopContainer = styled.div`
  display: none;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1600px;
    height: 100%;
    width: 90%;
  }
`

export const MenuIcon = styled.div`
  cursor: pointer;
`

export const SearchIcon = styled.div``

// Left Pane
export const NavbarMenu = styled.div`
  backgroud: white;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 29px;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  width: 30%;
  padding: 10px 20px;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    display: none;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX_2} {
    width: 250px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_480_PX} {
    width: 250px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    width: 250px;
  }
`

export const NavbarHeaderIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  font-size: 200%;
  cursor: pointer;
`

export const NavbarMenuHeader = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.button.pineGreen};
`
export const NavbarOptionsBox = styled.div`
  width: 50%;
  color: rgba(0, 0, 0, 0.7);
`
export const NavbarOptionLeft = styled.div`
  width: 30%;
`
export const NavbarOptionRight = styled.div`
  width: 70%;
`
export const NavbarOptions = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  heigth: 35px;
  width: 100%;
  color: rgba(0, 0, 0, 0.7);
  &:active {
    color: ${colors.button.pineGreen};
  }
`
export const NavbarOptionsIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: inherit;
  font-size: 125%;
  cursor: pointer;
`
export const NavbarOptionsH3 = styled.h3`
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%; /* 24.685px */
`
