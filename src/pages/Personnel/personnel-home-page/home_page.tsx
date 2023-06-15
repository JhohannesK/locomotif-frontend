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
                sx={{ width:'60%','borderColor':'red'}}
                icon={<BiSearch />}
                placeholder="Search"
                size={'small'}
              />
            </SearchBarContainer>
            <div>
            <div>
              <h2>Dentist</h2>
              <p>Okomfo Anokye Teaching Hospital</p>
              <p>GHS 20k/year</p>
            </div>
            </div>
          </LowerContentRight>
        </LowerContentContainer>
      </LowerContent>
    </HomePageContainer>
  )
}

export default HomePage
