import LeftPaneProfile from '../../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import WeeklySummary from '../../../../_shared/components/WeeklySummary/WeeklySummary'
import {
  DropDown,
  FacilityLeftLowerContent,
  FacilityLeftMidContent,
  FacilityLeftUpperContent,
  PendingAppicationsInnerWrapper,
  PendingApplicationsDetailsWrapper,
  PendingApplicationsOuterWrapper,
  PendingApplicationsTitleWrapper,
  SeeMore,
  SeeMoreWrapper,
} from './styles'
import dropDownImage from '../../../../_shared/assets/drop_down_button.svg'
import IndividualPendingApplication from '../../../../_shared/components/PendingApplications/PendingApplications'

function FacilityLeftPane() {
  return (
    <>
      <FacilityLeftUpperContent>
        <LeftPaneProfile
          name="Ridge Hospital"
          jobTitle="Cardiac Hospital"
          workExperience="Airport, Accra"
        />
      </FacilityLeftUpperContent>
      <FacilityLeftMidContent>
        <WeeklySummary
          numberOfNewCandidates={3}
          numberOfProcessingApplications={2}
          numberOfAvailableJobs={1}
        />
      </FacilityLeftMidContent>
      <FacilityLeftLowerContent>
        <PendingApplicationsOuterWrapper>
          <PendingAppicationsInnerWrapper>
            <PendingApplicationsTitleWrapper>
              Pending Applications
            </PendingApplicationsTitleWrapper>
            <PendingApplicationsDetailsWrapper>
              <IndividualPendingApplication
                name="Nicholas Asante"
                jobTitle="Surgeon"
                date="12/22/22"
              />
              <IndividualPendingApplication
                name="Nicholas Asante"
                jobTitle="Surgeon"
                date="12/22/22"
              />
              <IndividualPendingApplication
                name="Nicholas Asante"
                jobTitle="Surgeon"
                date="12/22/22"
              />
            </PendingApplicationsDetailsWrapper>
            <SeeMoreWrapper>
              <SeeMore>See more</SeeMore>
              <DropDown>
                {
                  <img
                    src={dropDownImage}
                    alt="dropdown"
                    style={{ height: '100%', width: '100%' }}
                  />
                }
              </DropDown>
            </SeeMoreWrapper>
          </PendingAppicationsInnerWrapper>
        </PendingApplicationsOuterWrapper>
      </FacilityLeftLowerContent>
    </>
  )
}

// interface LeftPaneProps {};
export default FacilityLeftPane
