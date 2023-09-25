import {
  BottomContent,
  Content,
  Facility,
  GetStarted,
  JoinLocomotif,
  Logo,
  MainContent,
  Page,
  Personnel,
  TopContent,
} from './styles'
import facility from '../../_shared/assets/facility.jpeg'
import doctor from '../../_shared/assets/doctor.jpeg'
import routes from '../../routes'
import Constants from '../../utils/constants'

function LandingPage() {
  return (
    <Page>
      <Content>
        <Logo>Loco</Logo>
        <MainContent>
          <TopContent>
            <GetStarted>Get Started With Locomotif</GetStarted>
            <JoinLocomotif>
              Join Locomotif as a Personnel or Facility
            </JoinLocomotif>
          </TopContent>
          <BottomContent>
            <Facility
              onClick={() => {
                routes.navigate(Constants.ROUTES.FACILITY.facility_signup)
              }}
            >
              <img src={facility} alt="facility" />
              <div>Join As a health Care Facility</div>
            </Facility>
            <Personnel
              onClick={() => {
                routes.navigate(Constants.ROUTES.PERSONNEL.personnel_signup)
              }}
            >
              <img src={doctor} alt="doctor" />
              <div>Register As a Personnel</div>
            </Personnel>
          </BottomContent>
        </MainContent>
      </Content>
    </Page>
  )
}

export default LandingPage
