import ApplicationsCard, {
  ApplicationsCardProps,
} from '../components/applicationsCard/applicationsCard'
import {
  RightPaneContainer,
  Wrapper,
  ApplicationCardsContainer,
} from './styles'
import applicationsData from '../../../mocks/applications.json'
import Grid from '@mui/material/Grid'
import ApplicationFilterBar from '../components/filterApplicationCards/filterApplicationCards'
import { useState } from 'react'
import { FilterObject } from '../../@types'
import PersonnelLayout from '../../../../_shared/Layout/Layout'

const ApplicationsPage = () => {
  const applicationsCardDetails: ApplicationsCardProps[] =
    applicationsData.applications

  const [filterObject, setFilterObject] = useState<FilterObject>({
    status: [],
  })

  return (
    <Wrapper>
      <PersonnelLayout.LeftSide />
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
            sx={{
              '@media (max-width: 1200px)': {
                justifyContent: 'center',
                columnGap: '20px',
              },
            }}
            justifyContent="space-between"
            alignItems="center"
          >
            {applicationsCardDetails?.map((application, index) => (
              <ApplicationsCard application={application} index={index} />
            ))}
          </Grid>
        </ApplicationCardsContainer>
      </RightPaneContainer>
    </Wrapper>
  )
}

export default ApplicationsPage
