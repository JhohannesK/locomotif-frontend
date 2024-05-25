import { GenericButton, Input } from '@/_shared'
import JobCard from './JobCard'

const JobListingTemplate = () => {
  return (
    <div className="w-full flex flex-col gap-8 max-w-[57rem] items-center justify-center">
      <div className="h-56 flex flex-col  justify-between rounded-xl w-full bg-primary text-white p-10">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">Find you dream job here</p>
          <p className="text-sm">
            Locomotif is the best place to find your dream Medical Job. Explore
            our 1,000’s available jobs
          </p>
        </div>
        <form className="flex gap-3 w-full">
          <Input
            name="search"
            className="flex-grow shadow-none"
            placeholder="Search for a job"
          />
          <GenericButton
            className="border-1 border-white w-[15%]"
            title="Search"
            type="reset"
          />
        </form>
      </div>
      <div className="flex flex-col items-center justify-center">
        <JobCard />
      </div>
    </div>
  )
}

export default JobListingTemplate
