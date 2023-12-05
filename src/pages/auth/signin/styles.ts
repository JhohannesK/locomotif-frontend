import styled from 'styled-components'
import Constants from '../../../utils/constants'
import { colors } from '../../../colors'
import { SxProps } from '@mui/material'

export const signInProps: SxProps = {
  backgroundColor: colors.button.pineGreen,
  width: '100%',
  borderRadius: '10px',
  color: '#F6FBFF',
  textAlign: 'center',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '137.14%',
  ':hover': {
    backgroundColor: colors.button.pineGreen,
  },
}

export const ClearBtnProps: SxProps = {
  background: colors.background.white,
  width: '100%',
  borderRadius: '10px',
  color: '#344054',
  textAlign: 'center',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '137.14%',
  border: '1px solid #D0D5DD',
  ':hover': {
    backgroundColor: colors.button.aquamarine,
    color: colors.text.pineGreen,
  },
}

export const googleSignInProps: SxProps = {
  backgroundColor: '#FFF',
  borderColor: colors.button.pineGreen,
  color: 'rgba(0, 0, 0, 0.60)',
  textAlign: 'center',
  fontSize: '14px',
  width: '100%',
  borderRadius: '12px',
  ':hover': {
    backgroundColor: '#FFF',
    borderColor: colors.button.pineGreen,
  },
}

export const createAccountProps: SxProps = {
  backgroundColor: '#FFF',
  borderColor: colors.button.pineGreen,
  color: colors.background.pineGreen,
  textAlign: 'center',
  fontSize: '15px',
  width: '100%',
  height: '80%',
  borderRadius: '12px',
  border: '2px solid',
  ':hover': {
    backgroundColor: '#FFF',
    borderColor: colors.button.pineGreen,
  },
}

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`

//remember to come and put the  gap here later on
export const Content = styled.div`
  width: 100%; /* Note: corrected from "100%^" to "100%" */
  display: flex;
  max-width: 650px;
  min-width: 275px;
  margin: 14.5px;
  display: flex;
  flex-direction: column;
  gap: 4.4%;
`

export const Logo = styled.div`
  width: 100%;
  height: 6.34%;
  color: var(--Primary-Color, #0e6655);

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

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const SignInButtons = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 12.5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CreateAccount = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 55px;
`
