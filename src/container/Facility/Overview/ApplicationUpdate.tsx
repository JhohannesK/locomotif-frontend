import { Link } from '@tanstack/react-router'
import HistoryCardTemplate from '../components/HistoryCardTemplate'

const ApplicationUpdate = () => {
  return (
    <div className="flex flex-col gap-3 justify-center w-full">
      <div className="border border-border-tertiary bg-white w-full rounded-lg">
        <div className="p-5 flex flex-row items-center justify-between">
          <p style={{ fontWeight: 'bold' }}>Application History</p>
          <Link className="text-text-secondary" to={'/facility/mypostings'}>
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
