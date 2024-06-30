// import EmptyState from '@/_shared/components/cards/EmptyState'

import CreatePostCard from '@/container/Facility/components/CreatePostCard'
import ProfileCard from '@/container/Facility/components/ProfileCard'
import ApplicationUpdate from '@/container/Facility/Overview/ApplicationUpdate'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/facility/_layout/overview')({
  component: () => <Overview />,
})

function Overview() {
  return (
    <div>
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
    </div>
  )
}

export default Overview
