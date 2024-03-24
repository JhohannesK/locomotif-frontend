import { Link } from 'react-router-dom'
import HistoryCardTemplate from '../components/HistoryCardTemplate'

const ApplicationUpdate = () => {
  return (
    <div className="flex flex-col gap-3 justify-center w-full">
      <div className="border border-border-tertiary bg-white w-full rounded-lg">
        <div className="p-5 flex flex-row items-center justify-between">
          <p style={{ fontWeight: 'bold' }}>Application History</p>
          <Link className="text-text-secondary" to={'#'}>
            See All
          </Link>
        </div>
      </div>
      <HistoryCardTemplate />
      <HistoryCardTemplate />
    </div>
  )
}

export default ApplicationUpdate

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   width: 100%;
// `

// const AppHistory = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   gap: 1rem;
//   padding: 1.3rem 1rem;
//   border-radius: 0.5rem;
//   background: ${colors.background.white};
//   border: 1px solid ${colors.border.timberwolf};
//   box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
// `

// const SeeAllLink = styled(Link)`
//   font-size: 0.9rem;
//   font-weight: bold;
//   text-decoration: none;
//   color: ${colors.text.pineGreen};
