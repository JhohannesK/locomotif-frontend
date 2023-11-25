import { JobsContainer, LowerContentContainer, PostingStyles } from '../styles'
import JobCard from '../../components/posting-card/PostingCard'
import usePersonnel from '../hook/usePersonnel'
import ShimmerLoading from '../../../../_shared/shimmer/Shimmer'
import { useNavigate } from 'react-router-dom'
import Constants from '../../../../utils/constants'
import { useDispatch } from 'react-redux'
import { setHomepage } from '../slice/personnelSlice'

const PostingListTemplate = () => {
  const navigate = useNavigate()
  const { data, isLoading } = usePersonnel()
  const dispatch = useDispatch()

  function displayShimmer() {
    const shimmerLoader: React.ReactNode[] = []
    for (let i = 0; i < 4; i++) {
      shimmerLoader.push(<ShimmerLoading key={i} height={'10rem'} />)
    }

    return shimmerLoader
  }

  const handleOpen = () => {
    dispatch(setHomepage(5))
    navigate(Constants.ROUTES.PERSONNEL.post)
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
