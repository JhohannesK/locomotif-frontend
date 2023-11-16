import {
  FacilityDashboard,
  FacilityLeftContainer,
  FacilityMidContainer,
  FacilityRightContainer,
} from './home_page_style'
import FacilityLeftPane from '../components/LeftPane/LeftPane'
import MiddlePane from '../components/MIddlePane/MiddlePane'
import RightPane from '../components/RightPane/RightPane'

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
