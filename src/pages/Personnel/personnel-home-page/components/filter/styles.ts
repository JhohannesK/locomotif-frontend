import styled from 'styled-components'
import { colors } from '../../../../../colors'

export const FilterWrapper = styled.div`
  width: 286px;
  /* height: 304px; */
  border-radius: 10px;
  border: 1px solid rgba(209, 209, 209, 0.5);
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  gap: 10px;
`

export const FilterTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%;
  color: ${colors.text.night};
`
export const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Filterheading = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%;
  color: rgba(0, 0, 0, 0.8);
`
export const GreyText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%;
  color: rgba(0, 0, 0, 0.8);
`

export const FilterMinMax = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 0 30px;
`

export const FilterTextBubble = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 137.14%;
  background: #d9d9d9b2;
  padding: 8px 10px;
  margin-left: 5px;
  border-radius: 5px;
`
