import { styled } from 'styled-components'
import { colors } from '../../../colors'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 5.6%;
  width: 100%;
  height: 32%;
`
export const ImageWrapper = styled.div`
  outline: 1px solid orange;
  height: 100%;
  width: 20%;
  clip-path: circle();
  background-color: ${colors.background.whiteSmoke};
  background-size: cover;
  background-position: center center;
`

export const DetailsWrapper = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const NameWrapper = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%; /* 20.571px */
`

export const TitleWrapper = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%;
`

export const DateWrapper = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%; /* 19.2px */
`

export const DateAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
`
