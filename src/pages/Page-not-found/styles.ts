import styled from 'styled-components'

import { colors } from '../../colors'
import Constants from '../../utils/constants'
export const MainWrapper = styled.body`
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
`
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  width: 95%;
  height: 70%;
  max-width: 836px;
`
export const Logo = styled.div`
  color: ${colors.background.pineGreen};
  padding: 10px;
  border-radius: 10px;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const DescriptionBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: max-content;
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    width: 80%;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET} {
    width: 55%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_580_PX} {
    width: 90%;
  }
`

export const Title = styled.h1`
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
  font-family: Helvetica;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    font-size: 32px;
  }
`
export const InfoBoxContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 24px;
  height: inherit;
  // font-size: 125%;
  color: #d9d9d9;
`

export const Info = styled.h3`
  color: rgba(0, 0, 0, 0.6);

  /* Paragraph Text */
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
