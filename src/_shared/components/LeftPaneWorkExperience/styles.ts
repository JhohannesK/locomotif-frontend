import { styled } from 'styled-components'
import { colors } from '../../../colors'

export const IndividualExperiece = styled.div`
  display: flex;
  align-item: flex-start;
  gap: 8px;
`

export const CompanyImageContainer = styled.div`
  outline: 1px solid ${colors.background.whiteSmoke};
  height: 49px;
  width: 45px;
  border-radius: 5px;
  background-color: ${colors.background.whiteSmoke};
  background-size: cover;
  background-position: center center;
`

export const CompanyNameDurationRoleContainer = styled.div`
  height: 46px;
  width: 141px;
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  gap: 0px;
`
export const CompanyName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
  font-style: normal;
  line-height: 137.14%;
`

export const DurationRoleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`
export const Role = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%;
`
export const Duration = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%;
`
