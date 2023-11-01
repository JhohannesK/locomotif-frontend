import Layout from '../../../../_shared/Layout'
import ApplicationsCard from '../applicationsCard/applicationsCard'
import { Wrapper } from './styles'

const ApplicationsPage = () => {
  return (
    <Layout dashboardType="personnel">
      <Wrapper>
        <ApplicationsCard
          facilityName="Lester Hospital "
          postingID="PSD-001"
          date="12 Oct,2023"
          postingRole="Cardiologist"
          shiftTime="Morning"
          status="Approved"
        ></ApplicationsCard>
      </Wrapper>
    </Layout>
  )
}

export default ApplicationsPage
