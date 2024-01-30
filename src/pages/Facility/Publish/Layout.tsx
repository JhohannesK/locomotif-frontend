import Header from '../components/Header'
import styled from 'styled-components'
import HeaderBtns from '../components/HeaderBtns'
import Constants from '../../../utils/constants'

const JobLayout = ({
  steppers,
  prevPosting,
  jobDetails,
}: {
  steppers: JSX.Element
  prevPosting: JSX.Element
  jobDetails: JSX.Element
}) => {
  return (
    <Container>
      <StepsAndDetails>
        <div>
          <Header />
        </div>
        <InnerContainer>
          <StepperContainer style={{ minWidth: '20rem' }}>
            {steppers}
          </StepperContainer>
          <div style={{ width: '100%' }}>{jobDetails}</div>
        </InnerContainer>
      </StepsAndDetails>
      <PrevStyles>
        <HeaderBtns />
        <div>{prevPosting}</div>
      </PrevStyles>
    </Container>
  )
}

export default JobLayout

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 2500px;
  margin: 2rem auto;
`

const PrevStyles = styled.div`
  display: none;
  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_M_PX} {
    display: flex;
  }
  flex-direction: column;
  gap: 1rem;
`

const StepsAndDetails = styled.div`
  display: flex;
  padding: 0 1.5rem;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const InnerContainer = styled.div`
  display: flex;
  gap: 1rem;
`
const StepperContainer = styled.div`
  display: none;
  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    display: flex;
  }
`
