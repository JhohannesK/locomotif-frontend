import { styled } from 'styled-components'
import Constants from '../../../utils/constants'
// import { colors } from '../../../colors'

export const FacilityDashboard = styled.section`
  height: 100%;
  outline: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX_3} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
// Left Pane
export const FacilityLeftContainer = styled.div`
  width: 19%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 29px;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    width: 23%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    width: 24%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX_3} {

            display: none;
 
`

export const FacilityLeftUpperContent = styled.div`
  height: 250px;
  width: 100%;
`
export const FacilityLeftMidContent = styled.div`
  height: 250px;
  width: 100%;
  margin-top: 5px;
  border-radius: 10px;
  border: 1px solid rgba(209, 209, 209, 0.5);
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 0px;
`

export const FacilityLeftMidBox = styled.div`
  width: 100%;
`

export const FacilityLeftMidBoxContent = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

export const LeftContent = styled.div`
  max-height: 100%;
  max-width: 30%;
  width: auto;
  height: auto;
`
export const RightContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`
export const RightContentH4 = styled.h4`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 27.428px */
`

export const RightContentP = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Helvetica;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%; /* 20.571px */
`
export const FacilityLeftMidTitle = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Helvetica;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 34.285px */
`
export const FacilityLeftLowerContent = styled.div`
  height: 250px;
  width: 100%;
`

// Middle Pane
export const FacilityMidContainer = styled.div`
  width: 47%;
  height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 5px;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    width: 47%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX_3} {
    width: 90%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    width: 47%;
  }
`

// Right Pane
export const FacilityRightContainer = styled.div`
  width: 19%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid rgba(209, 209, 209, 0.5);
  background: #fff;
  padding: 10px 5px;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    width: 23%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX} {
    width: 24%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX_3} {
    display: none;
  }
`
