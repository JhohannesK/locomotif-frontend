import styled from 'styled-components'
import { colors } from '../../../colors'
import { Link } from 'react-router-dom'
import ApplicantCard from './ApplicantCard'

const HistoryCardTemplate = () => {
  return (
    <HistoryCard>
      <CardTitle>
        <HeaderSpace>
          <p style={{ fontWeight: 'bold' }}>Cardiologist</p>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <p style={{ fontWeight: '500' }}>$1500</p>
            <p>One time</p>
          </div>
        </HeaderSpace>
        <HeaderSpace>
          <p style={{ opacity: '.6' }}>4th Nov, 2024</p>
          <p style={{ opacity: '.6' }}>7 days left</p>
        </HeaderSpace>
      </CardTitle>
      <CardBody>
        <Title>
          <p style={{ fontWeight: 'bold' }}>Applicants</p>
          <ViewLink to="#">View All</ViewLink>
        </Title>
        <CardHolder>
          <ApplicantCard />
          <ApplicantCard />
          <ApplicantCard />
          <ApplicantCard />
          <ApplicantCard />
          <ApplicantCard />
        </CardHolder>
      </CardBody>
    </HistoryCard>
  )
}

export default HistoryCardTemplate

const HistoryCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${colors.background.white};
  border: 1px solid ${colors.border.timberwolf};
  box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
`
const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${colors.background.whiteSmoke};
`
const HeaderSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.8rem 0;
  border-radius: 0.5rem;
  background: ${colors.background.white};
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`
const ViewLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.text.pineGreen};
`

const CardHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: scroll;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: transparent transparent; /* Firefox */

  &::-webkit-scrollbar {
    width: 12px; /* Adjust as needed */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Hide thumb */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Hide track */
  }
`
