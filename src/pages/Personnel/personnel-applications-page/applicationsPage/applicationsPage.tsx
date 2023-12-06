import ApplicationsCard from '../components/applicationsCard/applicationsCard'
import {
  RightPaneContainer,
  Wrapper,
  ApplicationCardsContainer,
} from './styles'
import ApplicationFilterBar from '../components/filterApplicationCards/filterApplicationCards'
import PersonnelLayout from '../../../../_shared/Layout/Layout'
import usePersonnelApplication from '../hook/useApplication'

const ApplicationsPage = () => {
  const { data: applicationsCardDetails } = usePersonnelApplication()

  const approvedApplications = applicationsCardDetails?.filter(
    (application) => application.status === 'ACCEPTED'
  )
  const pendingApplications = applicationsCardDetails?.filter(
    (application) => application.status === 'PENDING'
  )

  const declinedApplications = applicationsCardDetails
    ?.filter((application) => application.status === 'DECLINED')
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })

  return (
    <Wrapper>
      <PersonnelLayout.LeftSide />
      <RightPaneContainer>
        <ApplicationFilterBar title="Approved Applications" />
        <ApplicationCardsContainer>
          {approvedApplications?.map((application, index) => (
            <ApplicationsCard application={application} index={index} />
          ))}
        </ApplicationCardsContainer>
        <ApplicationFilterBar title="Application In Progress" />
        <ApplicationCardsContainer>
          {pendingApplications?.map((application, index) => (
            <ApplicationsCard application={application} index={index} />
          ))}
        </ApplicationCardsContainer>
        <ApplicationFilterBar title="Declined Applications" />
        <ApplicationCardsContainer>
          {declinedApplications?.map((application, index) => (
            <ApplicationsCard application={application} index={index} />
          ))}
        </ApplicationCardsContainer>
      </RightPaneContainer>
    </Wrapper>
  )
}

export default ApplicationsPage
