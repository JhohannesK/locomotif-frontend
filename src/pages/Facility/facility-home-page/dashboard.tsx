import {
  FacilityDashboard,
  FacilityLeftContainer,
  FacilityMidContainer,
  FacilityRightContainer,
} from './home_page_style'
import FacilityLeftPane from './LeftPane/LeftPane'
import MiddlePane from './MIddlePane/MiddlePane'
import RightPane from './RightPane/RightPane'

function Dashboard() {
  return (
    <>
      <FacilityDashboard>
        <FacilityLeftContainer>
          <FacilityLeftPane />
        </FacilityLeftContainer>
        <FacilityMidContainer>
          <MiddlePane />
        </FacilityMidContainer>
        <FacilityRightContainer>
          <RightPane />
        </FacilityRightContainer>
      </FacilityDashboard>
    </>
  )
}

export default Dashboard
