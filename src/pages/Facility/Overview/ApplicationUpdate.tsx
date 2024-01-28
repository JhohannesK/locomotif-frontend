import styled from 'styled-components'
import { colors } from '../../../colors'
import { Link } from 'react-router-dom'
import HistoryCardTemplate from '../components/HistoryCardTemplate'

const ApplicationUpdate = () => {
  return (
    <Wrapper>
      <AppHistory>
        <p style={{ fontWeight: 'bold' }}>Application History</p>
        <SeeAllLink to={'#'}>See All</SeeAllLink>
      </AppHistory>
      <HistoryCardTemplate />
      <HistoryCardTemplate />
    </Wrapper>
  )
}

export default ApplicationUpdate

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const AppHistory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.3rem 1rem;
  border-radius: 0.5rem;
  background: ${colors.background.white};
  border: 1px solid ${colors.border.timberwolf};
  box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
`

const SeeAllLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.text.pineGreen};
`
