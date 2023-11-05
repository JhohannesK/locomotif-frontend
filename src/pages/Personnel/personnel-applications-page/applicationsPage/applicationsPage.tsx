import Layout from '../../../../_shared/Layout/Layout'
import LeftPane from '../../personnel-home-page/components/LeftPane'

import ApplicationsCard, {
  ApplicationsCardProps,
} from '../applicationsCard/applicationsCard'
import { FilterPane, RightPaneContainer, Wrapper } from './styles'
import applicationsData from '../../../mocks/applications.json'
import Grid from '@mui/material/Grid'
import { LeftPaneContainer } from '../../personnel-home-page/styles'

const ApplicationsPage = () => {
  const applicationsCardDetails: ApplicationsCardProps[] =
    applicationsData.applications
  return (
    <Layout dashboardType="personnel">
      <Wrapper>
        <LeftPaneContainer>
          <LeftPane />
        </LeftPaneContainer>
        <RightPaneContainer>
          <FilterPane></FilterPane>
          <Grid container spacing={5}>
            {applicationsCardDetails?.map((application, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ApplicationsCard application={application} />
              </Grid>
            ))}
          </Grid>
        </RightPaneContainer>
      </Wrapper>
    </Layout>
  )
}

export default ApplicationsPage
