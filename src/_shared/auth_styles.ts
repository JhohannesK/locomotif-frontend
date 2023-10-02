import { styled } from 'styled-components'
import { colors } from '../colors'

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: flex-start;
`

export const AuthContent = styled.form`
  width: clamp(260px, 90%, 500px);
  margin: auto;
  // @media screen and (max-width: 1024px) {
  //   width: 60%;
  // }
  // @media screen and (max-width: 769px) {
  //   width: 70%;
  // }

  // @media screen and (max-width: 600px) {
  //   width: 80%;
  // }
`

export const AuthUpperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  // width: 100%;
  margin-bottom: 1.5rem;
`
export const AuthUpperContentH2 = styled.div`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 54.856px */
`
export const AuthUpperContentP = styled.p`
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 129.188%; /* 19.378px */
`
export const AuthLogo = styled.div`
  height: 100px;
  width: 100px;
`
export const AuthFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const AuthFieldsLabel = styled.h3`
  color: var(--Tertiary, rgba(0, 0, 0, 0.7));
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const AuthText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: right;
  padding: 0.7rem;
  font-size: 0.7rem;
  border-radius: 10px;
`
export const AuthLink = styled.div`
  color: ${colors.background.pineGreen};
  cursor: pointer;
  font-size: 0.7rem;
  // margin: 0.7rem;
`

export const AuthButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 1rem;
`
export const StepNavigateButtons = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const AuthButtonH3 = styled.h3`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.14%; /* 16.457px */

  &::before,
  &::after {
    content: '';
    flex: 1 1;
    border-bottom: 1px solid #d9d9d9;
    margin: auto;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`

// export const Dropzone
