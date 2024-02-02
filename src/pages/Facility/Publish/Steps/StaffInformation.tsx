import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { setActiveJobPublishingStep } from '../../../../redux/slices/appSlice'
import { ButtonWrapper, Container, Wrapper } from './JobDetails'

const StaffInformation = () => {
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Staff Information
        </p>
        <p>Staff Information</p>
        <ButtonWrapper>
          <GenericButton
            type="button"
            sx={{
              width: '8rem',
              bgcolor: 'white',
              border: `1px solid ${colors.text.pineGreen}`,
              color: `${colors.text.pineGreen}`,
            }}
            title="Previous"
            onClick={() => {
              dispatch(
                setActiveJobPublishingStep({ activeJobPublishingStep: 3 })
              )
            }}
          />
          <GenericButton
            type="button"
            sx={{ width: '8rem' }}
            title="Next"
            onClick={() => {
              dispatch(
                setActiveJobPublishingStep({ activeJobPublishingStep: 5 })
              )
            }}
          />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}

export default StaffInformation
