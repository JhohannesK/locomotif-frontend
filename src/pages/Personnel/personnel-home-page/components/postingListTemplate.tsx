import { JobsContainer, LowerContentContainer, PostingStyles } from '../styles'
// import postingData from '../../../mocks/postings.json'
// import { JobCardType } from '../../../../_shared/@types'
import JobCard from '../../components/job-card/JobLIstingCard'
// import usePersonnel from '../hook/usePersonnel'
import ShimmerLoading from '../../../../_shared/shimmer/Shimmer'
import { JobCardType } from '../../../../_shared/@types'

const PostingListTemplate = ({
  handleOpen,
  data,
  isLoading,
}: {
  handleOpen: () => void
  data: JobCardType[]
  isLoading: boolean
}) => {
  // const allPostingData: JobCardType[] = postingData.postings
  // const { data, isLoading } = usePersonnel()

  function displayShimmer() {
    const shimmerLoader: React.ReactNode[] = []
    for (let i = 0; i < 5; i++) {
      shimmerLoader.push(<ShimmerLoading key={i} height={'10rem'} />)
    }

    return shimmerLoader
  }
  return (
    <LowerContentContainer>
      <PostingStyles>
        <JobsContainer>
          {isLoading
            ? displayShimmer()
            : data?.map((posting, index) => {
                return (
                  <JobCard
                    key={index}
                    posting={posting}
                    handleOpen={handleOpen}
                  />
                )
              }) ?? []}
          {/* {allPostingData?.map((posting, index) => {
            return (
              <JobCard key={index} posting={posting} handleOpen={handleOpen} />
            )
          })} */}
        </JobsContainer>
      </PostingStyles>
    </LowerContentContainer>
  )
}

export default PostingListTemplate
