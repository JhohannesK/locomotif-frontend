import {
  CardContainer,
  Date,
  HospitalImage,
  HospitalName,
  HospitalNameAndImage,
  LeftSide,
  MainContainer,
  PostingId,
  PostingRole,
  PostingRoleAndId,
  RightSide,
  ShiftTime,
  Status,
  TimeAndDate,
} from './styles'
const ApplicationsCard = ({
  facilityName,
  postingID,
  date,
  postingRole,
  shiftTime,
  status,
}: ApplicationsCardProps) => {
  return (
    <CardContainer>
      <MainContainer>
        <LeftSide>
          <HospitalNameAndImage>
            <HospitalImage>
              {/* {place the image of the hospital here}*/}
            </HospitalImage>
            <HospitalName>{facilityName}</HospitalName>
          </HospitalNameAndImage>

          <PostingRoleAndId>
            <PostingId>{postingID}</PostingId>
            <PostingRole>{postingRole}</PostingRole>
          </PostingRoleAndId>
        </LeftSide>
        <RightSide>
          <Status $status={status}> {status}</Status>
          <TimeAndDate>
            <ShiftTime $shiftTime={shiftTime}>{shiftTime}</ShiftTime>
            <Date>{date}</Date>
          </TimeAndDate>
        </RightSide>
      </MainContainer>
    </CardContainer>
  )
}

interface ApplicationsCardProps {
  facilityName: string
  postingID: string
  date: string
  postingRole: string
  shiftTime: 'Morning' | 'Afternoon' | 'Evening'
  status: 'Approved' | 'Declined' | 'Pending' | 'On Hold'
}
export default ApplicationsCard
