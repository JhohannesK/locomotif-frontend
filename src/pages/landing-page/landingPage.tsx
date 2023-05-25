import Button from '@mui/material/Button'
import { colors } from '../../colors'
import { ButtonWrapper } from './landingPageStyles'

function LandingPage() {
  return (
    <ButtonWrapper>
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
