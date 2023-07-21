import {
  HomePageContainer,
  JobsContainer,
  LowerContent,
  LowerContentContainer,
  PostingStyles,
  MidContent,
  MidContentText,
  SearchBarContainer,
  Wrapper,
  AboutText,
  LeftPaneContainer,
  FilterContainer,
} from './home_page_style'
import { BiSearch } from 'react-icons/bi'

import Layout from '../../../_shared/Layout'
import JobCard from '../job-card/JobLIstingCard'
import axios from 'axios'
import Constants from '../../../utils/constants'
import { JobCardProps } from '../../../_shared/@types'
import { useQuery } from '@tanstack/react-query'
import GeneralButton from '../../../_shared/components/button/Button'
import { colors } from '../../../colors'
import LeftPane from './LeftPane'
import FilterPane from './filter'
import { SearchInput } from '../../../_shared'

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
      <Wrapper>
        <LeftPaneContainer>
          <LeftPane />
        </LeftPaneContainer>
        <HomePageContainer>
          <MidContent>
            <MidContentText>Find Your Dream Job Here!</MidContentText>
            <AboutText>
              Locomotif is the best place to find your dream Medical Job.
              Explore our 1,000’s available jobs
            </AboutText>
            <SearchBarContainer>
              <SearchInput
                name="Search"
                sx={{
                  width: '100%',
                  borderColor: 'red',
                  background: `${colors.background.white}`,
                  borderRadius: '10px',
                }}
                icon={<BiSearch />}
                placeholder="Search job"
                size={'small'}
              />
              <GeneralButton
                title="Search"
                sx={{
                  borderRadius: '15px',
                  border: '1px solid white',
                  padding: '10px',
                  fontSize: '13px',
                  fontWeight: 'medium',
                }}
              />
            </SearchBarContainer>
          </MidContent>
          <LowerContent>
            <LowerContentContainer>
              <PostingStyles>
                <JobsContainer>
                  {data?.map((posting) => {
                    return (
                      <JobCard
                        description={posting.description}
                        facility={posting.facility}
                        rate_per_6_hour_shift={posting.rate_per_6_hour_shift}
                        required_role={posting.required_role}
                        shift={posting.shift}
                      />
                    )
                  })}
                </JobsContainer>
              </PostingStyles>
            </LowerContentContainer>
          </LowerContent>
        </HomePageContainer>
        <FilterContainer>
          <FilterPane />
        </FilterContainer>
      </Wrapper>
    </Layout>
  )
}

export default HomePage
