import { LiaStar } from 'react-icons/lia'
import { Rate, RatingStyles, ReviewAndRatingWrapper } from '../styles'
import { Divider, Typography } from '@mui/material'

const RatingAndReview = () => {
  return (
    <ReviewAndRatingWrapper
      variant="outlined"
      sx={{ py: 2, px: 2, borderRadius: 3 }}
    >
      <Typography fontWeight={'bold'} variant="h6">
        Review And Reviews
      </Typography>
      <RatingStyles>
        <Rate>
          4.5 <LiaStar color={'#E2B93B'} />
        </Rate>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div>24 Reviews</div>
      </RatingStyles>
    </ReviewAndRatingWrapper>
  )
}

export default RatingAndReview
