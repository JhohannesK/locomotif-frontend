import { styled } from 'styled-components'
import { colors } from '../colors'

export const SignInPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
`

export const SignInPageContent = styled.form`
  width: 28%;
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 769px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`

export const SignInPageUpperContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 150px;
`
export const SignInPageLogo = styled.div`
  height: 100%;
  width: 50%;
`
export const SignInPageFields = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1px;
`

export const SignInPageText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: right;
  color: ${colors.button.pineGreen};
  cursor: pointer;
  font-size: 0.7rem;
`

export const SignInPageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
