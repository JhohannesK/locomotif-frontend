import { colors } from '../../colors'
import {
  ContentWrapper,
  PageWrapper,
  QuestionWrapper,
  WelcomeWrapper,
  SignedInWrapper,
  UserWrapper,
  ButtonWrapper,
} from './styles'
import GeneralButton from '../../general/Button'
import { useState } from 'react'

function LandingPage() {
  const [isClickedButton, setIsClickedButton] = useState(false)

  return (
    <PageWrapper>
      <ContentWrapper>
        <WelcomeWrapper>Welcome!</WelcomeWrapper>
        <QuestionWrapper>
          Are you an Institution or a Practitioner?
        </QuestionWrapper>

        <ButtonWrapper>
          <UserWrapper>
            <GeneralButton
              variantText={'contained'}
              sx={{
                backgroundColor: colors.button.aquamarine,
                color: 'black',
                height: '3rem',
                width: '20rem',
              }}
              title="Practitioner"
              size={'large'}
              onClick={() => {
                setIsClickedButton(true)
              }}
            />
            <GeneralButton
              sx={{
                backgroundColor: colors.button.pineGreen,
                color: colors.button.aquamarine,
                borderColor: colors.button.aquamarine,
                height: '3rem',
                width: '20rem',
              }}
              variantText={'outlined'}
              title={'Institution'}
              size={'small'}
              onClick={() => {
                setIsClickedButton(true)
              }}
            />
          </UserWrapper>
          {isClickedButton && (
            <SignedInWrapper>
              <GeneralButton
                variantText={'contained'}
                sx={{
                  backgroundColor: colors.button.aquamarine,
                  color: 'black',
                  height: '2rem',
                  width: '9rem',
                }}
                title="LOG iN"
                size={'large'}
              />
              <GeneralButton
                variantText={'outlined'}
                sx={{
                  backgroundColor: colors.button.pineGreen,
                  color: colors.button.aquamarine,
                  borderColor: colors.button.aquamarine,
                  height: '2rem',
                  width: '9rem',
                }}
                title="sign iN"
                size={'large'}
              />
            </SignedInWrapper>
          )}
        </ButtonWrapper>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default LandingPage
