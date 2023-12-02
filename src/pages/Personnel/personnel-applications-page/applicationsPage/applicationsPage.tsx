import ApplicationsCard from '../components/applicationsCard/applicationsCard'
import {
  RightPaneContainer,
  Wrapper,
  ApplicationCardsContainer,
} from './styles'
import ApplicationFilterBar from '../components/filterApplicationCards/filterApplicationCards'
import { useState } from 'react'
import { FilterObject } from '../../@types'
import PersonnelLayout from '../../../../_shared/Layout/Layout'
import usePersonnelApplication from '../hook/useApplication'

const ApplicationsPage = () => {
  const { data: applicationsCardDetails } = usePersonnelApplication()

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
          {applicationsCardDetails?.map((application, index) => (
            <ApplicationsCard application={application} index={index} />
          ))}
        </ApplicationCardsContainer>
      </RightPaneContainer>
    </Wrapper>
  )
}

export default ApplicationsPage
