import styled from 'styled-components'
import Radiobtn from '../../../_shared/components/Radiobtn'
import { colors } from '../../../colors'
import GeneralButton from '../../../_shared/components/button/Button'

const steps = [
  'Job Details',
  'Contract Details',
  'Pay type',
  'Location',
  'Staff information',
  'Personel Specification',
  'Professional Registration',
  'Contact Details',
  'Recruiter Information',
  'Preview Posing',
]

const JobPublishingSteps = () => {
  return (
    <Container>
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Job Publishing Steps
        </p>
        {steps.map((step, index) => {
          return (
            <StepRow key={index}>
              <Radiobtn height="1.5rem" width="1.5rem" />
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
  gap: 1rem;
  padding: 1rem;
`

export const StepRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`
