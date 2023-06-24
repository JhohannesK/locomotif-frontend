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
import JobCard from '../job-card/JobLIstingCard'
import axios from 'axios'
import Constants from '../../../utils/constants'
import { JobCardProps } from '../../../general/@types'
import { useQuery } from '@tanstack/react-query'

function HomePage() {
  const fetchPostings = async (): Promise<JobCardProps[]> => {
    const response = await axios.get<JobCardProps[]>(
      `${Constants.BaseURL}postings/`
    )
    return response.data
  }

  const { data, isLoading } = useQuery<JobCardProps[], Error>(
    ['postings'],
    fetchPostings
  )
  console.log(data)
  if (isLoading) {
    return <>loading</>
  }

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
                {data?.map((posting) => {
                  return (
                    <JobCard
                      description={posting.description}
                      facility="Ridge Hospital"
                      rate_per_6_hour_shift={posting.rate_per_6_hour_shift}
                      required_role={posting.required_role}
                      shift={posting.shift}
                    />
                  )
                })}
              </JobsContainer>
            </LowerContentRight>
          </LowerContentContainer>
        </LowerContent>
      </HomePageContainer>
    </Layout>
  )
}

export default HomePage
