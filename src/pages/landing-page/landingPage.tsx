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
            <Facility>
              <img src={facility} alt="facility" />
              <div>Join As a health Care Facility</div>
            </Facility>
            <Personnel>
              <img
                src={doctor}
                alt="facility"
                style={{
                  height: '500px',
                  width: '100%',
                  maxWidth: '400px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
              <div>Register As a Personnel</div>
            </Personnel>
          </BottomContent>
        </MainContent>
      </Content>
    </Page>
  )
}

export default LandingPage
