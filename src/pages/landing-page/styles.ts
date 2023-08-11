import styled from 'styled-components'
import { colors } from '../../colors'

export const PageWrapper = styled.body`
  height: 100vh;
  background-color: ${colors.background.pineGreen};
  align-items: start;
  background-color: ${colors.background.pineGreen};
  align-items: start;
`

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`

export const WelcomeWrapper = styled.h1`
  font-weight: bold;
  font-size: 7rem;
  color: ${colors.text.platinum};
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

export const QuestionWrapper = styled.div`
  font-size: 1.2rem;
  color: ${colors.text.platinum};
  text-align: center;
`

export const SignedInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5rem;
  justify-content: space-between;
`
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
