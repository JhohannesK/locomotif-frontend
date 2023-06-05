import { styled } from 'styled-components'
import { colors } from '../colors'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
`

export const AuthContent = styled.form`
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

export const AuthUpperContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 150px;
`
export const AuthLogo = styled.div`
  height: 100%;
  width: 50%;
`
export const AuthFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AuthText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: right;
  color: ${colors.button.pineGreen};
  cursor: pointer;
  font-size: 0.7rem;
  padding: 0.7rem;
`

export const AuthButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
