import { styled } from 'styled-components'
import { colors } from '../../colors'
import Constants from '../../utils/constants'

export const Page = styled.body`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background.pineGreen};
  align-items: center;
  justify-content: center;
  display: flex;
  overflow-y: scroll;
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
  background-color: ${colors.background.whiteSmoke};
  padding: 10px;
  border-radius: 10px;

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
  color: ${colors.text.white};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 68.57px */
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_480_PX} {
    font-size: 2em;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    font-size: 4rem;
    letter-spacing: 2px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX_2} {
    font-size: 3rem;
    letter-spacing: 2px;
  }
`
export const JoinLocomotif = styled.div`
  color: ${colors.text.white};
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

export const ImageCard = styled.div`
  width: 95%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  // height: 30rem;

  height: 280px;
  ${Constants.LAYOUT.MEDIA_QUERIES.SMALL_PX} {
    height: 500px;
  }

  img {
    width: 100%;
    //  max-width: 400px;
    object-fit: cover;
    height: 250px;
    ${Constants.LAYOUT.MEDIA_QUERIES.SMALL_PX} {
      height: 500px;
    }
  }
`

export const ImageCardText = styled.div`
  position: absolute;
  bottom: 16px;
  left: 22px;
  font-size: 18px;
  letter-spacing: 1px;
  font-style: normal;
  font-weight: 700;
  color: white;
  ${Constants.LAYOUT.MEDIA_QUERIES.SMALL_PX} {
    bottom: 26px;
    left: 32px;
    font-size: 25px;
  }
`

export const ImageCardOverlay = styled.div`
  position: absolute;
  background-color: black;
  height: 100%;
  width: 100%;
  opacity: 0.3;
`
