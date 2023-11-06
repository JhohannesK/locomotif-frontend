import Layout from '../../../../_shared/Layout/Layout'
import LeftPane from '../../personnel-home-page/components/LeftPane'

import ApplicationsCard, {
  ApplicationsCardProps,
} from '../applicationsCard/applicationsCard'
import {
  RightPaneContainer,
  Wrapper,
  LeftPaneContainer,
  ApplicationCardsContainer,
} from './styles'
import applicationsData from '../../../mocks/applications.json'
import Grid from '@mui/material/Grid'
import FilterApplications from '../filterApplicationCards/filterApplicationCards'

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
          <FilterApplications></FilterApplications>
          <ApplicationCardsContainer>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              columnSpacing={{ xs: 1, sm: 4, md: 9 }}
            >
              {applicationsCardDetails?.map((application, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ApplicationsCard application={application} />
                </Grid>
              ))}
            </Grid>
          </ApplicationCardsContainer>
        </RightPaneContainer>
      </Wrapper>
    </Layout>
  )
}

export default ApplicationsPage
