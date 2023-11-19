import { styled } from 'styled-components'
import Constants from '../../../utils/constants'
import { colors } from '../../../colors'

export const FacilityLeftMidBox = styled.div`
  min-width: 80%;
  max-width: 90%;
  display: flex;
  flex-direction: column;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    width: 90%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    width: 75%;
  }
`

export const FacilityLeftMidBoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    height: 40px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    height: 45px;
  }
`

export const LeftContent = styled.div`
  width: 30px;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    max-width: 22%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    max-width: 30%;
  }
`
export const RightContent = styled.div`
  width: 75%;
  display: inline-flex;
  align-items: center;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    width: 72%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    max-width: 75%;
  }
`
export const RightContentH4 = styled.h4`
  color: ${colors.text.pineGreen};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 27.428px */
  padding: 10px;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    font-size: 18px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    font-size: 20px;
  }
`

export const RightContentP = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%; /* 20.571px */

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    font-size: 12px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    font-size: 15px;
  }
`
export const FacilityLeftMidTitle = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 34.285px */
  margin-bottom: 20px;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    font-size: 20px;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    font-size: 25px;
  }
`
