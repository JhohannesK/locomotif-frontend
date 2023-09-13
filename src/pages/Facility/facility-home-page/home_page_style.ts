import { styled } from 'styled-components'
import { colors } from '../../../colors'

export const FacilityDashboard = styled.section`
  height: 100%;
  outline: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const FacilityLeftContainer = styled.div`
  width: 21%;
  height: 100%;
  display: flex;
  flex-direction: column;
  outline: 1px solid blue;
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
export const FacilityMidContainer = styled.div`
  width: 47%;
  height: 100%;
  outline: 1px solid purple;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`
export const JobPostBox = styled.div`
  width: 100%;
  height: 300px;
  background: ${colors.button.white};
  border-radius: 10px;
  border: 1px solid #d1d1d1;
  padding: 10px;
`
export const JobPostHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const JobPostTitle = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%;
`

export const JobPostTextContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`

export const JobPostOptions = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const JobPostButtons = styled.div`
  width: 50%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const FacilityRightContainer = styled.div`
  width: 21%;
  height: 100%;
  outline: 1px solid orange;
  height: 100%;
  display: flex;
  flex-direction: column;
`
