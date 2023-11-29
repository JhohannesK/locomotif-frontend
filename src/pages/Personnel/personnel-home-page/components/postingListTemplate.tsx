import { JobsContainer, LowerContentContainer, PostingStyles } from '../styles'
import JobCard from '../../components/posting-card/PostingCard'
import ShimmerLoading from '../../../../_shared/shimmer/Shimmer'
import { useNavigate } from 'react-router-dom'
import Constants from '../../../../utils/constants'
import { useDispatch } from 'react-redux'
import { setHomepage, setPostingId } from '../slice/personnelSlice'
import { PostingCardType } from '../../@types'

const PostingListTemplate = ({
  data,
  isLoading,
}: {
  data: PostingCardType[]
  isLoading: boolean
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function displayShimmer() {
    const shimmerLoader: React.ReactNode[] = []
    for (let i = 0; i < 3; i++) {
      shimmerLoader.push(<ShimmerLoading key={i} height={'10rem'} />)
    }

    return shimmerLoader
  }

  const handleOpen = (id: number) => {
    dispatch(setHomepage(5))
    dispatch(setPostingId(id))
    navigate(Constants.ROUTES.PAGES.PERSONNEL.post)
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
                    handleOpen={() => handleOpen(posting.id)}
                  />
                )
              }) ?? []}
        </JobsContainer>
      </PostingStyles>
    </LowerContentContainer>
  )
}

export default PostingListTemplate
