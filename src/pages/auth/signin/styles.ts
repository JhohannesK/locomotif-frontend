import styled from 'styled-components'
import Constants from '../../../utils/constants'

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`

//remember to come and put the  gap here later on
export const Content = styled.div`
  height: 70%;
  width: 100%; /* Note: corrected from "100%^" to "100%" */
  display: flex;
  max-width: 650px;
  margin: 14.5px;
  display: flex;
  flex-direction: column;
  gap: 4.4%;
`

export const Logo = styled.div`
  width: 100%;
  height: 6.34%;
  color: var(--Primary-Color, #0e6655);
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  ${Constants.LAYOUT.MEDIA_QUERIES.SMALL_PX} {
    font-size: 30px;
  }
`

export const Welcome = styled.div`
  width: 100%;
  height: 14.5%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const WelcomeBack = styled.div`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 54.856px */
  text-align: center;
  ${Constants.LAYOUT.MEDIA_QUERIES.SMALL_PX} {
    font-size: 40px;
  }
`
//make the font 15px for bigger screens
export const Instructions = styled.div`
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 129.188%; /* 15.503px */
  text-align: center;
  ${Constants.LAYOUT.MEDIA_QUERIES.SMALL_PX} {
    font-size: 15px;
  }
`

export const InputBoxes = styled.form`
  width: 100%;
  // height: 39%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  // background-color:blue;
`

export const InputBoxLabels = styled.div`
  color: rgba(0, 0, 0, 0.8);

  /* Paragraph Text */
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const SignInButtons = styled.div`
  width: 100%;
  height: 12.5%;
  display: flex;
  flex-direction: column;
  gap: 10%;
`

export const CreateAccount = styled.div`
  width: 100%;
  height: 9.3%;
`
