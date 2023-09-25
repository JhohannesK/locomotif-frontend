import styled from 'styled-components'
import { colors } from '../../../../colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: ${colors.background.pineGreen};
  margin: 5px;
  width: 20%;
  color: ${colors.text.white};
  padding: 6rem 2rem;
  border-radius: 20px;
`

export const Logo = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

export const StepperWrapper = styled.div``
