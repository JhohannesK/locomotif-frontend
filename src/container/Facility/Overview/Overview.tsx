import ProfileCard from '../components/ProfileCard'
import ApplicationUpdate from './ApplicationUpdate'
import CreatePostCard from '../components/CreatePostCard'
import FacilityRootLayout from '../Layout'
// import EmptyState from '@/_shared/components/cards/EmptyState'

function Overview() {
  return (
    <FacilityRootLayout>
      <div className="flex flex-col md:flex-row gap-10 max-w-[1700px] mx-auto">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <ProfileCard />
          <CreatePostCard />
        </div>
        <div className="2xl:w-[80%] w-full md:w-[70%]">
          <ApplicationUpdate />
          {/* <div className="flex items-center justify-center h-full">
          <EmptyState />
        </div> */}
        </div>
      </div>
    </FacilityRootLayout>
  )
}

export default Overview
