import ProfileCard from '../components/ProfileCard'
import Layout from '../Layout'
import ApplicationUpdate from './ApplicationUpdate'
import CreatePostCard from '../components/CreatePostCard'

function Overview() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-10 max-w-[1700px] mx-auto">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <ProfileCard />
          <CreatePostCard />
        </div>
        <div className="2xl:w-[80%] w-full md:w-[70%]">
          <ApplicationUpdate />
        </div>
      </div>
    </Layout>
  )
}

export default Overview
