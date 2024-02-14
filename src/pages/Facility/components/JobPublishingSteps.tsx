import styled from 'styled-components'
import Radiobtn from '../../../_shared/components/Radiobtn'
import { colors } from '../../../colors'
import GeneralButton from '../../../_shared/components/button/Button'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook'
import { CheckedRadioBtn } from '../../../_shared'
import { moveToPage } from '../../../redux/slices/appSlice'

const steps = [
  'Job Details',
  'Staff information',
  'Contract Details',
  'Pay type',
  'Location',
  'Personel Specification',
  'Professional Registration',
  'Recruiter Information',
  'Preview Posing',
]

const JobPublishingSteps = () => {
  const activeSidebar = useAppSelector(
    (state) => state.app.activeJobPublishingStep
  )
  const dispatch = useAppDispatch()

  const onHandleClick = (index: number) => {
    dispatch(moveToPage({ activeJobPublishingStep: index }))
  }

  const onDisable = (index: number): boolean => {
    switch (activeSidebar) {
      case 0:
        return index > 0
      case 1:
        return index > 1
      case 2:
        return index > 2
      case 3:
        return index > 3
      case 4:
        return index > 4
      case 5:
        return index > 5
      case 6:
        return index > 6
      case 7:
        return index > 7
      case 8:
        return index > 8
      default:
        return false
    }
  }

  return (
    <Container>
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Job Publishing Steps
        </p>
        {steps.map((step, index) => {
          return (
            <StepRow
              key={index}
              onClick={() => {
                onHandleClick(index)
                // dispatch(moveToPage({activeJobPublishingStep: index}))
              }}
              disabled={onDisable(index)}
            >
              {!onDisable(index) ? (
                <CheckedRadioBtn outerRadius="1.5rem" innerRadius=".5rem" />
              ) : (
                <Radiobtn height="1.5rem" width="1.5rem" />
              )}
              <p>{step}</p>
            </StepRow>
          )
        })}
        <GeneralButton sx={{ width: '100%' }} title="Submit" />
      </Wrapper>
    </Container>
  )
}

export default JobPublishingSteps

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${colors.border.timberwolf};
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
  max-width: 25rem;
  background: ${colors.background.white};
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem;
`

export const StepRow = styled.button`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.3rem;
  background: transparent;
  border: none;
  /* TODO: Use default pointer when not active */
  cursor: pointer;
`
