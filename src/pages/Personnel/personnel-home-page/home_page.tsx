import {
  HomePageContainer,
  JobsContainer,
  LowerContent,
  LowerContentContainer,
  LowerContentLeft,
  LowerContentRight,
  MidContent,
  MidContentText,
  SearchBarContainer,
} from './home_page_style'
import { BiSearch } from 'react-icons/bi'
import SearchInput from '../../../general/SearchInput'
import Layout from '../../../general/Layout'
import JobCard from '../../../general/components/JobLIstingCard'
// import axios from 'axios'
// import Constants from '../../../utils/constants'
// import { JobCardProps } from '../../../general/@types'

function HomePage() {
  // const fetchPostings = async (): Promise<JobCardProps[]> => {
  //   const response = await axios.get<JobCardProps[]>(
  //     `${Constants.BaseURL}postings/`
  //   )
  //   return response.data
  // }

  // const { data } = useQuery<JobCardProps>({
  //    'postings',
  //   fetchPostings,
  // })
  // console.log(data)
  return (
    <Layout>
      <HomePageContainer>
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
                <JobCard
                  description="Fix the problem for the children teeth"
                  facility="Ridge Hospital"
                  rate_per_6_hour_shift={20}
                  title="Paediatrician"
                />
              </JobsContainer>
            </LowerContentRight>
          </LowerContentContainer>
        </LowerContent>
      </HomePageContainer>
    </Layout>
  )
}

export default HomePage
