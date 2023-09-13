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
  width: 22%;
  height: 100%;
  display: flex;
  flex-direction: column;
  outline: 1px solid blue;
`

export const FacilityLeftUpperContent = styled.div`
  height: 250px;
`

export const FacilityMidContainer = styled.div`
  width: 45%;
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
  width: 22%;
  height: 100%;
  outline: 1px solid orange;
  height: 100%;
  display: flex;
  flex-direction: column;
`
