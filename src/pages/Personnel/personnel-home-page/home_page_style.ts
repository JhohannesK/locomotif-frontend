import { styled } from 'styled-components'
import { colors } from '../../../colors'

export const HomePageContainer = styled.section`
  height: 100vh;
  outline: 1px solid ${colors.button.pineGreen};
  background-color: ${colors.background.whiteSmoke};
`

export const NavBar = styled.nav`
  height: 8%;
  border-bottom: 2px solid #04a592;
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
  font-size: 3rem;
  color: ${colors.background.keppel};
  font-weight: 600;
`

export const LowerContent = styled.section`
  height: 70%;
  //   outline: 1px solid red;
`

export const LowerContentContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 90%;
  //   outline: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const LowerContentLeft = styled.aside`
  width: 30%;
  height: 100%;
  border: 2px solid ${colors.background.pineGreen};
  border-radius: 10px;
`

export const LowerContentRight = styled.aside`
  width: 68%;
  height: 100%;
  // border: 2px solid ${colors.background.pineGreen};
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
  display: flex;
  flex-direction: column;
  // outline: 1px solid red;
  height: 85%;
`

export const JobContainer = styled.div`
  max-width: 100%;
  border: 1px solid ${colors.background.pineGreen};
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  height: 110px;
  margin-bottom: 10px;
`

export const JobContainerLeft = styled.div`
  width: 30%;
  color: #fff;
  background: ${colors.background.pineGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const JobTitle = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  opacity: 0.8;
`

export const JobContainerRight = styled.div`
  padding-left: 10px;
`
export const JobDescription = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
`

export const JobLocation = styled.h3`
  font-size: 1rem;
  opacity: 0.8;
`
