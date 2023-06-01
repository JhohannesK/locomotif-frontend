import { colors } from '../../colors'
import {
  ContentWrapper,
  PageWrapper,
  QuestionWrapper,
  WelcomeWrapper,
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
          sx={{ backgroundColor: colors.button.aquamarine, color: 'black' }}
          title="Practioner"
          size={'large'}
        />

        <GeneralButton
          sx={{
            backgroundColor: colors.button.pineGreen,
            color: colors.button.aquamarine,
            borderColor: colors.button.aquamarine,
            height: '7rem',
          }}
          variantText={'outlined'}
          title={'Institution'}
          size={'small'}
        />
      </ContentWrapper>
    </PageWrapper>
  )
}

export default LandingPage
