import { styled } from 'styled-components'
import { colors } from '../../../colors'

export const LeftPaneProfileContainer = styled.div`
  border-radius: 10px;
  border: 1px solid #d1d1d1;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 0px;
  height: 225px;
  width: 100%;
`

export const LeftProfileButtonContainer = styled.div``

export const LeftProfileNameContainer = styled.div`
  color: #000000;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%;
`

export const LeftProfileWorkContainer = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%;
  color: rgba(0, 0, 0, 0.6);
`

export const LeftProfileWorkExperienceContainer = styled.span`
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%;
  color: rgba(0, 0, 0, 0.8);
`

export const LeftProfileWorkExperienceAndWork = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const NavBarUserImageProfile = styled.div`
  outline: 1px solid orange;
  height: 98px;
  width: 98px;
  clip-path: circle();
  background-color: ${colors.background.whiteSmoke};
  margin-right: 10px;
  background-size: cover;
  background-position: center center;
`

export const LeftProfileImageContainer = styled.div``
