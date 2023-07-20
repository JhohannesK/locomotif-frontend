import { styled } from 'styled-components'
import { colors } from '../../../colors'
import Constants from '../../../utils/constants'

export const HomePageContainer = styled.section`
  height: 100vh;
  outline: 1px solid ${colors.button.pineGreen};
`

export const NavBar = styled.nav`
  height: 8%;
  border-bottom: 2px solid ${colors.border.raisinBlack};
  padding: 3px 0px;
`
export const NavBarContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  height: 80%;
  width: 50px;
  clip-path: circle();
  background-color: red;
  margin-right: 10px;
  background-size: cover;
  background-position: center center;
`

export const MidContent = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MidContentText = styled.h1`
  color: ${colors.background.pineGreen};
  font-weight: 600;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    font-size: 1.8rem;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    font-size: 2.5rem;
  }
`

export const LowerContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  //   outline: 1px solid red;
`

export const LowerContentContainer = styled.div`
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    margin: 0;
    width: 100%;
  }
  margin: 0 auto;
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    justify-content: space-between;
  }
`

export const LowerContentLeft = styled.aside`
  display: none;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    display: flex;
    width: 30%;
    height: 100%;
    border: 2px solid ${colors.background.pineGreen};
    border-radius: 10px;
  }
`

export const LowerContentRight = styled.aside`
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    width: 100%;
    height: 100%;
  }
  width: 68%;
  height: 100%;
  border-radius: 10px;
`
export const SearchBarContainer = styled.div`
  height: 12%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`

export const JobsContainer = styled.div`
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    margin: 0;
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  height: 85%;
`
