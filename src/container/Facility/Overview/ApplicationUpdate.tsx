import { Link } from '@tanstack/react-router'
import HistoryCardTemplate from '../components/HistoryCardTemplate'
import Constants from '@/utils/constants'

const ApplicationUpdate = () => {
  return (
    <div className="flex flex-col gap-3 justify-center w-full">
      <div className="border border-border-tertiary bg-white w-full rounded-lg">
        <div className="p-5 flex flex-row items-center justify-between">
          <p style={{ fontWeight: 'bold' }}>Application History</p>
          <Link
            className="text-text-secondary"
            to={Constants.ROUTES.PAGES.FACILITY.myPosting}
          >
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
