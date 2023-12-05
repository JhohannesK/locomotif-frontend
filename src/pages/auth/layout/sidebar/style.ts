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
  width: 30rem;
  color: ${colors.text.white};
  padding: 7px;
  border-radius: 20px;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    display: none;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET} {
    display: flex;
    width: 50%;
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
export const BoxStyle = styled.button<{ grayOut: number; tabIndex: number }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  cursor: ${(props) =>
    props.grayOut === 1
      ? props.tabIndex > 1
        ? 'default'
        : 'pointer'
      : props.grayOut === 2
      ? props.tabIndex > 2
        ? 'default'
        : 'pointer'
      : props.grayOut === 3
      ? props.tabIndex < 3
        ? 'default'
        : 'pointer'
      : props.grayOut === 4
      ? props.tabIndex < 3
        ? 'default'
        : 'pointer'
      : 'pointer'};
  background-color: inherit;
  outline: none;
  border: none;
  color: ${(props) =>
    props.grayOut === 1
      ? props.tabIndex > 1
        ? colors.text.inactive
        : colors.text.white
      : props.grayOut === 2
      ? props.tabIndex > 2
        ? colors.text.inactive
        : colors.text.white
      : props.grayOut === 3
      ? props.tabIndex < 3
        ? colors.text.inactive
        : colors.text.white
      : props.grayOut === 4
      ? props.tabIndex < 3
        ? colors.text.inactive
        : colors.text.white
      : colors.text.white};
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  gap: 1px;
  font-family: 'Inter';
`

export const TitleStyles = styled.p`
  font-size: 17px;

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET} {
    font-size: 15px;
  }
`

export const SubTitle = styled.p`
  font-size: 12px;
  font-weight: 100;
  opacity: 60%;

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET} {
    font-size: 10px;
  }
`
