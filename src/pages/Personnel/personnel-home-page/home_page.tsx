import {
  HomePageContainer,
  LowerContent,
  LowerContentContainer,
  LowerContentLeft,
  LowerContentRight,
  MidContent,
  MidContentText,
  NavBar,
  NavBarContainer,
  NavBarRightContent,
  NavBarUserImage,
  NavBarUserName,
} from './home_page_style'
import image from '../../../assets/user.jpeg'

function HomePage() {
  return (
    <HomePageContainer>
      <NavBar>
        <NavBarContainer>
          <div>Locomotif</div>
          <NavBarRightContent>
            <NavBarUserImage>
              <img
                src={image}
                alt="health-leaf icon"
                style={{ height: '100%', width: '100%' }}
              />
            </NavBarUserImage>

            <NavBarUserName>Mwopkopopo</NavBarUserName>
          </NavBarRightContent>
        </NavBarContainer>
      </NavBar>
      <MidContent>
        <MidContentText>Find Your Dream Job Here</MidContentText>
      </MidContent>
      <LowerContent>
        <LowerContentContainer>
          <LowerContentLeft>filter</LowerContentLeft>
          <LowerContentRight>jobs</LowerContentRight>
        </LowerContentContainer>
      </LowerContent>
    </HomePageContainer>
  )
}

export default HomePage
