import { styled } from 'styled-components'
import { colors } from '../../colors'
import Constants from '../../utils/constants'

//remember to change the size of the fonts on bigger screens
export const Page = styled.body`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background.white};
  align-items: center;
  justify-content: center;
  display: flex;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  width: 95%;
  height: 70%;
  max-width: 836px;
`

export const Logo = styled.div`
  top: 0;
  color: var(--Primary-Color, #0e6655);
  font-family: Helvetica;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  flex-grow: 1;
`

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  width: 100%;
  height: 20%;
`
export const BottomContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  // background-color: brown;
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_480_PX} {
    gap: 30px;
  }
`

export const GetStarted = styled.div`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Helvetica;
  font-size: 1.7em;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 68.57px */
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_480_PX} {
    font-size: 2.5em;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    font-size: 50px;
  }
`
export const JoinLocomotif = styled.div`
  color: var(--Tertiary, rgba(0, 0, 0, 0.7));
  font-family: Helvetica;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_480_PX} {
    font-size: 2.5em;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    font-size: 25px;
  }
`

export const Facility = styled.div`
  // background-color: blue;
  position: relative; /* Ensure relative positioning for containing absolute positioned text */

  img {
    width: 100%;
    max-width: 400px;
    object-fit: cover;
    border-radius: 12px;
    height: 500px;
  }

  div {
    position: absolute; /* Position text absolutely within the container */
    bottom: 36px;
    left: 0;
    right: 0; /* Center the text horizontally */
    text-align: center; /* Center the text horizontally within the container */
    color: #fff;
    /* Main Header */
    font-family: Helvetica;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`

export const Personnel = styled.div`
  // background-color: green;
  position: relative; /* Ensure relative positioning for containing absolute positioned text */

  img {
    width: 100%;
    max-width: 400px;
    object-fit: cover;
    border-radius: 12px;
    height: 500px;
  }

  /* Center the text vertically and horizontally within the container */
  div {
    position: absolute; /* Position text absolutely within the container */
    bottom: 36px;
    left: 0;
    right: 0; /* Center the text horizontally */
    text-align: center; /* Center the text horizontally within the container */
    color: #fff;
    /* Main Header */
    font-family: Helvetica;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`
