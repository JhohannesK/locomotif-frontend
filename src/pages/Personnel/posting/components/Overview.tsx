import { Box, Typography } from '@mui/material'
import {
  BtnStyles,
  ButtonStyles,
  ListItemView,
  OverviewWrapper,
} from '../styles'
import GeneralButton from '../../../../_shared/components/button/Button'
import { useContext } from 'react'
import { LayoutContext } from '../../../../_shared/Layout/context/LayoutContext'
import { PostingCardType } from '../../@types'
import { formatDate } from '../../../../utils/util'
import ShimmerLoading from '../../../../_shared/shimmer/Shimmer'

const Overview = ({
  data,
  isLoading,
}: {
  data?: PostingCardType
  isLoading: boolean
}) => {
  const { handleOpen } = useContext(LayoutContext)
  return (
    <OverviewWrapper variant="outlined" sx={{ py: 2, px: 2, borderRadius: 3 }}>
      <Typography marginBottom={3} fontWeight={'bold'} variant="h6">
        Overview
      </Typography>
      <Box sx={{ width: '100%' }}>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Job Type
          </Typography>
          <Typography fontWeight={500} variant="body1">
            {isLoading ? (
              <ShimmerLoading height="1.5rem" width="8rem" />
            ) : data?.full_time ? (
              'Full-time'
            ) : (
              'Part-time'
            )}
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Role
          </Typography>
          <Typography fontWeight={500} variant="body1">
            {isLoading ? (
              <ShimmerLoading height="1.5rem" width="8rem" />
            ) : (
              data?.required_speciality
            )}
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Location
          </Typography>
          <Typography fontWeight={500} variant="body1">
            {isLoading ? (
              <ShimmerLoading height="1.5rem" width="8rem" />
            ) : (
              (data?.facility.city, data?.facility.region)
            )}
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Shift Type
          </Typography>
          <Typography fontWeight={500} variant="body1">
            {isLoading ? (
              <ShimmerLoading height="1.5rem" width="8rem" />
            ) : (
              data?.shift_type
            )}
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Deadline
          </Typography>
          <Typography fontWeight={500} variant="body1">
            {isLoading ? (
              <ShimmerLoading height="1.5rem" width="8rem" />
            ) : (
              formatDate(
                data?.application_deadline ? data?.application_deadline : ''
              )
            )}
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Date Posted
          </Typography>
          <Typography fontWeight={500} variant="body1">
            {isLoading ? (
              <ShimmerLoading height="1.5rem" width="8rem" />
            ) : (
              formatDate(data?.start_time ? data?.start_time : '')
            )}
          </Typography>
        </ListItemView>
      </Box>
      <ButtonStyles>
        <GeneralButton sx={BtnStyles} title="Apply Now" onClick={handleOpen} />
        <GeneralButton
          sx={{ background: 'white', ...BtnStyles, color: 'black' }}
          title="Save"
        />
      </ButtonStyles>
    </OverviewWrapper>
  )
}

export default Overview
