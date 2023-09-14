import LeftPaneProfile from '../../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import WeeklySummary from '../../../../_shared/components/WeeklySummary/WeeklySummary'
import {
  FacilityLeftLowerContent,
  FacilityLeftMidContent,
  FacilityLeftUpperContent,
} from './styles'

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
      <FacilityLeftLowerContent></FacilityLeftLowerContent>
    </>
  )
}

// interface LeftPaneProps {};
export default FacilityLeftPane
