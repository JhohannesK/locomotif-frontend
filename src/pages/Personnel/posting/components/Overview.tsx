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

const Overview = ({ data }: { data?: PostingCardType }) => {
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
            {data?.shift_type}
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Role
          </Typography>
          <Typography fontWeight={500} variant="body1">
            Full Time
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Location
          </Typography>
          <Typography fontWeight={500} variant="body1">
            Full Time
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Shift Type
          </Typography>
          <Typography fontWeight={500} variant="body1">
            Full Time
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Deadline
          </Typography>
          <Typography fontWeight={500} variant="body1">
            Full Time
          </Typography>
        </ListItemView>
        <ListItemView>
          <Typography sx={{ opacity: 0.7 }} variant="body2">
            Date Posted
          </Typography>
          <Typography fontWeight={500} variant="body1">
            Full Time
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
