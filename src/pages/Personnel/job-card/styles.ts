import { styled } from 'styled-components'
import { colors } from '../../../colors'

export const JobContainer = styled.div`
  max-width: 100%;
  background: linear-gradient(
    80deg,
    ${colors.background.pineGreen} 17%,
    ${colors.background.whiteSmoke} 30%
  );
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  height: 110px;
  margin-bottom: 10px;
`

export const JobContainerLeft = styled.div`
  width: 30%;
  color: #fff;
  display: flex;
  justify-content: center;
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
  color: ${colors.text.white};
  font-size: 1.2rem;
  opacity: 0.8;
`
export const JobDescription = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
`

export const JobLocation = styled.h3`
  font-size: 1rem;
  color: ${colors.text.raisinBlack};
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
  background-color: ${colors.background.pompAndPower};
  color: white;
`
