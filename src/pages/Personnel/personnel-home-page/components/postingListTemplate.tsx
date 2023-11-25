import { JobsContainer, LowerContentContainer, PostingStyles } from '../styles'
import JobCard from '../../components/posting-card/PostingCard'
import usePersonnel from '../hook/usePersonnel'
import ShimmerLoading from '../../../../_shared/shimmer/Shimmer'

const PostingListTemplate = ({ handleOpen }: { handleOpen: () => void }) => {
  const { data, isLoading } = usePersonnel()

  function displayShimmer() {
    const shimmerLoader: React.ReactNode[] = []
    for (let i = 0; i < 4; i++) {
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
        </JobsContainer>
      </PostingStyles>
    </LowerContentContainer>
  )
}

export default PostingListTemplate
