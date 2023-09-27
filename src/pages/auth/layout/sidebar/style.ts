import styled from 'styled-components'
import { colors } from '../../../../colors'
import Constants from '../../../../utils/constants'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background.pineGreen};
  margin: 5px;
  width: 22rem;
  color: ${colors.text.white};
  padding: 7px;
  border-radius: 20px;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    display: none;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET} {
    display: flex;
    width: 40%;
  }
`

export const LogoAndStepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  gap: 5rem;
`

export const Logo = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

export const StepperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
`
export const BoxStyle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`

export const TitleStyles = styled.p`
  font-size: 17px;

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET} {
    font-size: 12px;
  }
`

export const SubTitle = styled.p`
  font-size: 10px;
  font-weight: 100;
  opacity: 60%;

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET} {
    font-size: 8px;
  }
`
