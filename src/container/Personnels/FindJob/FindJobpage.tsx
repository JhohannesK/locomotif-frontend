import FilterComponent from '../components/FilterComponent'
import JobListingTemplate from '../components/JobListingTemplate'
import PersonnelProfileCard from '../components/ProfileCard'
import PersonnelRootLayout from '../Layout'

const FindJobpage = () => {
  return (
    <PersonnelRootLayout>
      <div className="flex flex-col md:flex-row gap-7 2xl:gap-10 max-w-[1700px] mx-auto">
        <div className="hidden 2xl:flex flex-col gap-3 w-[20rem] items-center md:items-start">
          <PersonnelProfileCard />
          {/* <CreatePostCard /> */}
        </div>
        <div className="flex flex-grow flex-col">
          <JobListingTemplate />
        </div>
        <div className="hidden lg:flex w-[25rem]">
          <FilterComponent />
        </div>
      </div>
    </PersonnelRootLayout>
  )
}

export default FindJobpage
