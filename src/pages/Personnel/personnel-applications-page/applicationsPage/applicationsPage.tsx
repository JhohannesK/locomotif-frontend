import ApplicationsCard, {
  ApplicationsCardProps,
} from '../applicationsCard/applicationsCard'
import {
  RightPaneContainer,
  Wrapper,
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
    <Wrapper>
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
