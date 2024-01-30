import Layout from '../Layout'
import JobPublishingSteps from '../components/JobPublishingSteps'
import PrevPostings from '../components/PrevPostings'
import JobLayout from './Layout'
import ContractDetails from './Steps/ContractDetails'
// import JobDetails from './Steps/JobDetails'

const RootLayout = () => {
  return (
    <Layout>
      <JobLayout
        steppers={<JobPublishingSteps />}
        jobDetails={<ContractDetails />}
        prevPosting={<PrevPostings />}
      />
    </Layout>
  )
}

export default RootLayout
