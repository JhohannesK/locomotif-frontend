import { styled } from 'styled-components'
import { colors } from '../../../colors'

export const JobContainer = styled.div`
  width: 100%;
  background: ${colors.background.whiteSmoke};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const HospitalLogo = styled.div``

export const JobContainerHead = styled.div`
  color: #fff;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const JobContainerRight = styled.div`
  padding-left: 10px;
  width: 100%;
  padding: 0 10px 10px 30px;
  /* background-color: inherit; */
`
export const JobTitle = styled.h2`
  color: ${colors.text.night};
  font-size: 1.2rem;
  opacity: 0.8;
`
export const JobDescription = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
`

export const JobLocation = styled.h3`
  font-size: 1rem;
  color: ${colors.text.night};
`

export const RateAndShift = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const ShiftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: ${colors.background.pineGreen};
  color: white;
`
