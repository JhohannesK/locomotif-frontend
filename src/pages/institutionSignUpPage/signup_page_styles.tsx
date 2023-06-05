import { styled } from 'styled-components'
import { colors } from '../../colors'

export const SignUpPageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignUpPageContent = styled.section`
  max-width: 300px;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
`
export const SignUpPageTitle = styled.h1`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 2rem;
`
export const SignUpPageFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`
export const SignUpPageText = styled.div`
  font-size: 0.7rem;
`
export const SignUpPageButton = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border-color: ${colors.button.pineGreen};
  background-color: ${colors.button.pineGreen};
  cursor: pointer;
  border-style: none;
  margin-top: 2rem;
  margin-bottom: 1rem;
`
