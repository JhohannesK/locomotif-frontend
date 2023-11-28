import { Card, Tooltip, Typography } from '@mui/material'
import { PostingCardType } from '../../@types'
import {
  CardSx,
  CardWrapper,
  DateAndReview,
  FacilityDetailsHeading,
  FacilityNameLocation,
  HeaderWrapper,
  LocationAndSpeciality,
  PostingDescription,
} from './styles'
import AvatarDisplay from '../../../../_shared/components/Avatar/Avatar'
import { HiLocationMarker } from 'react-icons/hi'
import { FiBookmark } from 'react-icons/fi'
import { formatDate } from '../../../../utils/util'
import Tag from './Tag'

const PostingCard = ({
  posting,
  handleOpen,
}: {
  posting: PostingCardType
  handleOpen: () => void
}) => {
  return (
    <Card variant="outlined" sx={CardSx} onClick={handleOpen}>
      <CardWrapper>
        <FacilityDetailsHeading>
          <HeaderWrapper>
            <AvatarDisplay
              fullname={posting.facility.name}
              width={60}
              height={60}
            />
            <FacilityNameLocation>
              <Typography fontWeight={'bold'} variant="h6">
                {posting.facility.name}
              </Typography>
              <LocationAndSpeciality>
                <Tag label={posting.facility.region} />
                <Tag
                  icon={<HiLocationMarker />}
                  label={`${posting.facility.region}, ${posting.facility.city}`}
                />
              </LocationAndSpeciality>
            </FacilityNameLocation>
          </HeaderWrapper>
          <Tooltip title="Save this job">
            <div style={{ cursor: 'pointer' }}>
              <FiBookmark size={25} />
            </div>
          </Tooltip>
        </FacilityDetailsHeading>
        <PostingDescription>
          <Typography variant="body2">{posting.description}</Typography>
        </PostingDescription>
        <DateAndReview>
          <Typography style={{ opacity: 0.6 }} variant="body2">
            {formatDate(posting.application_deadline)}
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            {24} Reviews
          </Typography>
        </DateAndReview>
      </CardWrapper>
    </Card>
  )
}

export default PostingCard
