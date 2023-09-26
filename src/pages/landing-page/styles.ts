import { styled } from 'styled-components'
import { colors } from '../../colors'
import Constants from '../../utils/constants'

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
  font-family: Inter;
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
  // background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  align-items: center;
  width: 100%;
  gap: 21px;
  border-radius: 12px;
  // background-color: brown;
  ${Constants.LAYOUT.MEDIA_QUERIES.SMALL_PX} {
    flex-direction: row;
    height: 100%;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_480_PX} {
    gap: 30px;
  }
`

export const GetStarted = styled.div`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 68.57px */
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_480_PX} {
    font-size: 2em;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    font-size: 50px;
  }
`
export const JoinLocomotif = styled.div`
  color: var(--Tertiary, rgba(0, 0, 0, 0.7));
  font-family: Inter;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_480_PX} {
    font-size: 1.5em;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    font-size: 25px;
  }
`

export const Facility = styled.div`
  // background-color: green;
  width: 95%;
  position: relative;

  img {
    width: 100%;
    max-width: 400px;
    object-fit: cover;
    border-radius: 12px;
    height: 250px;
    ${Constants.LAYOUT.MEDIA_QUERIES.SMALL_PX} {
      height: 500px;
    }
  }

  div {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 0;
    text-align: left;
    color: #fff;
    /* Main Header */
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`

export const Personnel = styled.div`
  // background-color: green;
  width: 95%;
  position: relative;

  img {
    width: 100%;
    max-width: 400px;
    object-fit: cover;
    border-radius: 12px;
    height: 250px;
    ${Constants.LAYOUT.MEDIA_QUERIES.SMALL_PX} {
      height: 500px;
    }
  }

  div {
    color: #fff;
    /* Semi bold */
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: absolute;
    bottom: 10px;
    left: 5px;
    right: 0;
    text-align: left;
  }
`
