import { Grid } from '@mui/material'
import Header from './components/Header'
import Overview from './components/Overview'
import JobDescription from './components/Job-description'
import RatingAndReview from './components/Rating-and-Review'
import { PostingWrapper } from './styles'
import ConfirmationModal from '../../../_shared/components/modal/ConfirmationModal'
import usePosting from './hook/usePosting'

const PostingPage = () => {
  const { data, isLoading } = usePosting()
  return (
    <PostingWrapper>
      <ConfirmationModal />
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
