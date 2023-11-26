import { styled } from 'styled-components'
import { colors } from '../../../colors'
import Constants from '../../../utils/constants'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  background: ${colors.background.whiteSmoke};
  width: 100%;
  display: flex;
`

export const NavbarStyle = styled.div`
  display: none;
  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;
    height: 3.5rem;
    align-items: center;
    justify-content: space-between;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX_MAX} {
    margin: 0 3rem;
  }
`

export const LogoStyles = styled.div`
  color: white;
  background-color: ${colors.background.pineGreen};
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 600;
`

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const NavBarMobileContainer = styled.div`
  margin: 0 auto;
  height: 3.5rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    display: none;
  }
`

// export const NavBarLaptopContainer = styled.div`
//   display: none;

//   ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin: 0 auto;
//     max-width: 1600px;
//     height: 100%;
//     /* width: 90%; */
//   }
// `

// export const NavBar = styled.nav`
//   height: 4rem;
//   /* border-bottom: 2px solid ${colors.background.timberwolf}; */
//   background-color: ${colors.background.whiteSmoke};
//   padding: 3px 0px;
//   /* position: fixed; */
//   width: 100%;
//   align-self: center;
// `
// export const NavbarWrapper = styled.div`
//   max-width: 1400px;
// `

// export const LeftStyles = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 65px;
//   flex-grow: 1;
// `

export const NavBarRightContent = styled.div`
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* width: 20%; */
  height: 100%;
`
export const NavBarRightBox = styled.div`
  /* width: 140px; */
  /* height: 45px; */
  display: inline-flex;
  align-items: center;
  gap: 15px;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_M_PX} {
    margin-left: 100px;
  }
`
export const NavBarRightIcons = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 38px;
  height: 38px; */
  gap: 15px;
  font-size: 200%;
  opacity: 0.5;
  cursor: pointer;
`

// export const Navbarlinks = styled.div`
//   display: flex;
//   /* justify-content: space-between; */
//   align-items: center;
//   gap: 30px;
//   /* width: 40%; */
//   height: 100%;

//   ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
//     font-size: 13px;
//   }

//   ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_M_PX} {
//     /* max-width: 35%; */
//   }

//   ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
//     /* max-width: 30%; */
//   }
// `

export const LinkStyles = styled(Link)`
  text-decoration: none;
  color: ${colors.button.pineGreen};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 16px;
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
  clip-path: circle();
  background-color: red;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  /* margin-right: 10px; */
  background-size: cover;
  background-position: center center;
`

export const MenuIcon = styled.div`
  cursor: pointer;
`

export const SearchIcon = styled.div``

/* Left Pane */

export const NavbarMenu = styled.div`
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #fff;
  width: 365px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 29px;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  padding: 10px 20px;
  padding-top: 0px;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    display: none;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX_2} {
    width: 250px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_480_PX} {
    width: 290px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    width: 300px;
  }
`

export const NavbarHeaderIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  font-size: 130%;
  cursor: pointer;
`

export const NavbarMenuHeader = styled.div`
  position: sticky;
  top: 0px;
  padding: 10px 0;
  background: #fff;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.button.pineGreen};
`
export const NavbarOptionsBox = styled.div`
  width: 70%;
  color: rgba(0, 0, 0, 0.7);
`
export const NavbarOptionLeft = styled.div`
  width: 20%;
`
export const NavbarOptionRight = styled.div`
  width: 75%;
`
export const NavbarOptions = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  height: 35px;
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
