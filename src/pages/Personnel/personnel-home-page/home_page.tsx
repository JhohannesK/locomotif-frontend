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
import postingData from '../../mocks/postings.json'
import Layout from '../../../_shared/Layout'
import JobCard from '../components/job-card/JobLIstingCard'
import GeneralButton from '../../../_shared/components/button/Button'
import { colors } from '../../../colors'
import LeftPane from './LeftPane'
import FilterPane from './filter'
import { SearchInput } from '../../../_shared'
import useFetch from './hook/useFetch'
import ShimmerLoading from '../../../_shared/shimmer/Shimmer'
import { JobCardType } from '../../../_shared/@types'
import BasicModal from '../components/modal/Modal'
import React from 'react'

function PersonnelHomePage() {
  const { isLoading } = useFetch()

  function displayShimmer() {
    const shimmerLoader: React.ReactNode[] = []
    for (let i = 0; i < 5; i++) {
      shimmerLoader.push(<ShimmerLoading key={i} height={'10rem'} />)
    }

    return shimmerLoader
  }

  const allPostingData: JobCardType[] = postingData.postings
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Layout dashboardType="personnel">
      <BasicModal open={open} handleClose={handleClose} />
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
                  width: '25%',
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
                  {isLoading
                    ? displayShimmer()
                    : allPostingData?.map((posting) => {
                        return (
                          <JobCard
                            posting={posting}
                            onClick={() => handleOpen()}
                          />
                        )
                      })}
                  {/* {allPostingData?.map((posting) => {
                    return (
                      <JobCard posting={posting} onClick={() => handleOpen()} />
                    )
                  })} */}
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

export default PersonnelHomePage
