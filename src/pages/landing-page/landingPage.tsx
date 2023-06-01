import { colors } from '../../colors'
import {
  ContentWrapper,
  PageWrapper,
  QuestionWrapper,
  WelcomeWrapper,
  SignedInWrapper,
} from './styles'
import GeneralButton from '../../general/Button'

function LandingPage() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <WelcomeWrapper>Welcome!</WelcomeWrapper>
        <QuestionWrapper>Are you an Institution or a Doctor?</QuestionWrapper>
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
        />
        <SignedInWrapper>
          <GeneralButton
            variantText={'contained'}
            sx={{
              backgroundColor: colors.button.aquamarine,
              color: 'black',
              height: '2rem',
              width: '15rem',
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
              width: '15rem',
            }}
            title="sign iN"
            size={'large'}
          />
        </SignedInWrapper>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default LandingPage
