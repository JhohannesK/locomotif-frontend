import styled from 'styled-components'
import { colors } from '../../../colors'

const PrevPostings = () => {
  return (
    <Container>
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Previous Postings
        </p>
        <p>
          If you’ve previously published a job listing, you can reuse the
          information to create a new listing
        </p>
      </Wrapper>
    </Container>
  )
}

export default PrevPostings

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${colors.border.timberwolf};
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
  max-width: 25rem;
  background-color: ${colors.background.white};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`
