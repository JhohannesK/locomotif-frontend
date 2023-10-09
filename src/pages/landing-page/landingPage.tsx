import {
  BottomContent,
  Content,
  ImageCard,
  GetStarted,
  JoinLocomotif,
  Logo,
  MainContent,
  Page,
  TopContent,
  ImageCardText,
  ImageCardOverlay,
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
            <ImageCard
              onClick={() => {
                routes.navigate(Constants.ROUTES.FACILITY.facility_signup)
              }}
            >
              <ImageCardOverlay />
              <img src={facility} alt="facility" />
              <ImageCardText>Join As a Health Care Facility</ImageCardText>
            </ImageCard>
            <ImageCard
              onClick={() => {
                routes.navigate(Constants.ROUTES.PERSONNEL.personnel_signup)
              }}
            >
              <ImageCardOverlay />
              <img src={doctor} alt="doctor" />
              <ImageCardText>Register As a Personnel</ImageCardText>
            </ImageCard>
          </BottomContent>
        </MainContent>
      </Content>
    </Page>
  )
}

export default LandingPage
