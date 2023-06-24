import { styled } from 'styled-components'
import { colors } from '../../colors'
import Constants from '../../utils/constants'

export const NavBar = styled.nav`
  height: 4rem;
  border-bottom: 2px solid ${colors.background.keppel};
  padding: 3px 0px;
`

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
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    height: 100%;
    width: 90%;
  }
`

export const MenuIcon = styled.div``

export const SearchIcon = styled.div``
