import Button from '@mui/material/Button'
import { colors } from '../../colors'
import { ButtonWrapper } from './landingPageStyles'

function LandingPage() {
  return (
    <ButtonWrapper>
      <h1>How do you like to get in?</h1>
      <Button
        variant="contained"
        sx={{ backgroundColor: colors.aquamarine, color: 'black' }}
      >
        Practioner
      </Button>
      <Button
        sx={{
          backgroundColor: colors.pineGreen,
          color: colors.aquamarine,
          borderColor: colors.aquamarine,
          height: '7rem',
        }}
        variant="outlined"
        size="large"
      >
        Institution
      </Button>
    </ButtonWrapper>
  )
}

export default LandingPage
