import { styled } from 'styled-components'
import { colors } from '../../../colors'

export const SignInPageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignInPageContent = styled.form`
  max-width: 300px;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
`
export const SignInPageTitle = styled.h1`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 2rem;
`
export const SignInPageFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`
export const SignInPageText = styled.div`
  font-size: 0.7rem;
`
export const SignInPageButton = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border-color: ${colors.button.pineGreen};
  background-color: ${colors.button.pineGreen};
  cursor: pointer;
  border-style: none;
  margin-top: 2rem;
  margin-bottom: 1rem;
`
