import {
  FacilityDashboard,
  FacilityLeftContainer,
  FacilityMidContainer,
  FacilityRightContainer,
} from './home_page_style'
import FacilityLeftPane from './LeftPane/LeftPane'
import MiddlePane from './MIddlePane/MiddlePane'

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
        <FacilityRightContainer></FacilityRightContainer>
      </FacilityDashboard>
    </>
  )
}

export default Dashboard
