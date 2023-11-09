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
import ApplicationFilterBar from '../filterApplicationCards/filterApplicationCards'
import { useState } from 'react'
import { FilterObject } from './@types'

const ApplicationsPage = () => {
  const applicationsCardDetails: ApplicationsCardProps[] =
    applicationsData.applications

  const [filterObject, setFilterObject] = useState<FilterObject>({
    status: [],
  })

  return (
    <Layout dashboardType="personnel">
      <Wrapper>
        <LeftPaneContainer>
          <LeftPane />
        </LeftPaneContainer>
        <RightPaneContainer>
          <ApplicationFilterBar
            filterObject={filterObject}
            setFilterObject={setFilterObject}
          />
          <ApplicationCardsContainer>
            <Grid
              container
              columnGap={2}
              rowGap={2}
              justifyContent="center"
              alignItems="center"
            >
              {applicationsCardDetails?.map((application, index) => (
                <Grid key={index}>
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
