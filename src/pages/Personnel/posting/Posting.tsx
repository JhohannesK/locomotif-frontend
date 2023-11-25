import { Grid } from '@mui/material'
import Header from './components/Header'
import Overview from './components/Overview'
import JobDescription from './components/Job-description'
import RatingAndReview from './components/Rating-and-Review'
import { PostingWrapper } from './styles'

const PostingPage = () => {
  return (
    <PostingWrapper>
      <Header />
      <Grid container spacing={2} columns={18} height={'calc(100vh - 12rem)'}>
        <Grid item xs={18} md={4}>
          <Overview />
        </Grid>
        <Grid item xs={18} md={10}>
          <JobDescription />
        </Grid>
        <Grid item xs={18} md={4}>
          <RatingAndReview />
        </Grid>
      </Grid>
    </PostingWrapper>
  )
}

export default PostingPage
