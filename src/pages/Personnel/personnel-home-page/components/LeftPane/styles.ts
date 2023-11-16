import { styled } from 'styled-components'
import { colors } from '../../../../../colors'

export const LeftPaneWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 33px;
  width: 17rem;
`

export const WorkExperienceContainer = styled.div`
  width: 296px;
  border-radius: 10px;
  border: 1px solid rgba(209, 209, 209, 0.5);
  background: ${colors.background.white};
`

export const InnerWorkExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  left: 13px;
  bottom: 10px;
  padding-bottom: 10px;
  padding-top: 24px;
  padding-left: 13px;
`

export const WorkExperienceTitleContainer = styled.div`
  color: ${colors.text.night};
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%;
  width: 163px;
`

export const ActualWorkExperiencesContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`
