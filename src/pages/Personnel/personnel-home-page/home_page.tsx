import {
  HomePageContainer,
  JobContainer,
  JobContainerLeft,
  JobContainerRight,
  JobDescription,
  JobLocation,
  JobTitle,
  JobsContainer,
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
  SearchBarContainer,
} from './home_page_style'
import image from '../../../assets/user.jpeg'
import { BiSearch } from 'react-icons/bi'
import SearchInput from '../../../general/SearchInput'

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
          <LowerContentRight>
            <SearchBarContainer>
              <SearchInput
                name="Search"
                sx={{ width: '60%', borderColor: 'red' }}
                icon={<BiSearch />}
                placeholder="Search"
                size={'small'}
              />
            </SearchBarContainer>
            <JobsContainer>
              <JobContainer>
                <JobContainerLeft>
                  <JobTitle>Obstetrics and Gynecology Physician </JobTitle>
                </JobContainerLeft>
                <JobContainerRight>
                  <JobLocation>Okomfo Anokye Teaching Hospital</JobLocation>
                  <JobDescription>GHS 20K/yr</JobDescription>
                  <JobDescription>Full-time</JobDescription>
                </JobContainerRight>
              </JobContainer>
              <JobContainer>
                <JobContainerLeft>
                  <JobTitle>Acute Care Surgeon </JobTitle>
                </JobContainerLeft>
                <JobContainerRight>
                  <JobLocation>Ridge Medical Center</JobLocation>
                  <JobDescription>GHS 50K/yr</JobDescription>
                  <JobDescription>Part-time</JobDescription>
                </JobContainerRight>
              </JobContainer>
            </JobsContainer>
          </LowerContentRight>
        </LowerContentContainer>
      </LowerContent>
    </HomePageContainer>
  )
}

export default HomePage
