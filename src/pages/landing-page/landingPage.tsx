import Button from '@mui/material/Button'
import { colors } from '../../colors'
import { ContentWrapper, PageWrapper } from './styles'

function LandingPage() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <h1>How do you like to get in?</h1>
        <Button
          variant="contained"
          sx={{ backgroundColor: colors.button.aquamarine, color: 'black' }}
        >
          Practioner
        </Button>
        <Button
          sx={{
            // backgroundColor: colors.button.pineGreen,
            color: colors.button.aquamarine,
            borderColor: colors.button.aquamarine,
            height: '7rem',
          }}
          variant="outlined"
          size="large"
        >
          Institution
        </Button>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default LandingPage
