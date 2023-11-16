import { JobsContainer, LowerContentContainer, PostingStyles } from '../styles'
import postingData from '../../../mocks/postings.json'
import { JobCardType } from '../../../../_shared/@types'
import JobCard from '../../components/job-card/JobLIstingCard'

const PostingListTemplate = ({ handleOpen }: { handleOpen: () => void }) => {
  const allPostingData: JobCardType[] = postingData.postings

  // function displayShimmer() {
  //   const shimmerLoader: React.ReactNode[] = []
  //   for (let i = 0; i < 5; i++) {
  //     shimmerLoader.push(<ShimmerLoading key={i} height={'10rem'} />)
  //   }

  //   return shimmerLoader
  // }
  return (
    <LowerContentContainer>
      <PostingStyles>
        <JobsContainer>
          {/* {isLoading
                    ? displayShimmer()
                    : allPostingData?.map((posting) => {
                        return (
                          <JobCard
                            posting={posting}
                            onClick={() => handleOpen()}
                          />
                        )
                      })} */}
          {allPostingData?.map((posting, index) => {
            return (
              <JobCard key={index} posting={posting} handleOpen={handleOpen} />
            )
          })}
        </JobsContainer>
      </PostingStyles>
    </LowerContentContainer>
  )
}

export default PostingListTemplate
