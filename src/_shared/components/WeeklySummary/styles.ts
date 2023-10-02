import { styled } from 'styled-components'
import Constants from '../../../utils/constants'

export const FacilityLeftMidBox = styled.div`
  width: 80%;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    width: 90%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    width: 75%;
  }
`

export const FacilityLeftMidBoxContent = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    height: 40px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    height: 45px;
  }
`

export const LeftContent = styled.div`
  max-height: 100%;
  max-width: 30%;
  width: auto;
  height: auto;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    max-width: 22%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    max-width: 30%;
  }
`
export const RightContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    width: 72%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    max-width: 75%;
  }
`
export const RightContentH4 = styled.h4`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 27.428px */

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
  font-family: Inter;
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
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 34.285px */

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    font-size: 20px;
  }
  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    font-size: 25px;
  }
`
