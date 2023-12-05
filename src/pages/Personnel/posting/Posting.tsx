import { Grid } from '@mui/material'
import Header from './components/Header'
import Overview from './components/Overview'
import JobDescription from './components/Job-description'
import RatingAndReview from './components/Rating-and-Review'
import { PostingWrapper } from './styles'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Constants from '../../../utils/constants'
import { loadFromLocalStorage } from '../../../redux/hooks/middleware'

const PostingPage = () => {
  const postingId = loadFromLocalStorage({
    key: Constants.LOCALSTORAGE_KEYS.POSTINGID,
  })
  const getPostingByPostingId = async (postingId: number) => {
    const response = await axios.get(
      `${Constants.BaseURL}postings/${postingId}`
    )
    const data = await response.data
    return data
  }

  const { data, isLoading } = useQuery({
    queryKey: ['getPosting', postingId],
    queryFn: () => getPostingByPostingId(postingId),
    enabled: postingId !== undefined,
  })

  return (
    <PostingWrapper>
      <Header />
      <Grid container spacing={2} columns={18} height={'calc(100vh - 18rem)'}>
        <Grid item xs={18} md={4}>
          <Overview isLoading={isLoading} data={data} />
        </Grid>
        <Grid item xs={18} md={10}>
          <JobDescription data={data} isLoading={isLoading} />
        </Grid>
        <Grid item xs={18} md={4}>
          <RatingAndReview data={data} />
        </Grid>
      </Grid>
    </PostingWrapper>
  )
}

export default PostingPage
