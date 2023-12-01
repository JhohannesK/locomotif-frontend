import ShimmerLoading from '../../../../_shared/shimmer/Shimmer'
import { PostingCardType } from '../../@types'
import { DescriptionWrapper } from '../styles'
import { Typography } from '@mui/material'

const JobDescription = ({
  data,
  isLoading,
}: {
  data: PostingCardType
  isLoading: boolean
}) => {
  return (
    <DescriptionWrapper
      variant="outlined"
      sx={{ py: 2, px: 4, borderRadius: 3 }}
    >
      <Typography marginBottom={3} fontWeight={'bold'} variant="h6">
        Job Description
      </Typography>
      <Typography variant="body1">
        {isLoading ? <ShimmerLoading count={5} /> : data?.description}
      </Typography>
    </DescriptionWrapper>
  )
}

export default JobDescription
