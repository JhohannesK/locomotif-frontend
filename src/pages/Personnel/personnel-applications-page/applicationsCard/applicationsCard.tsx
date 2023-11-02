import {
  CardContainer,
  Date,
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
  application,
}: {
  application: ApplicationsCardProps
}) => {
  return (
    <CardContainer>
      <MainContainer>
        <LeftSide>
          <HospitalNameAndImage>
            <HospitalName>{application.facilityName}</HospitalName>
          </HospitalNameAndImage>
          <PostingRoleAndId>
            <PostingId>{application.postingID}</PostingId>
            <PostingRole>{application.postingRole}</PostingRole>
          </PostingRoleAndId>
        </LeftSide>
        <RightSide>
          <Status $status={application.status}> {application.status}</Status>
          <TimeAndDate>
            <ShiftTime $shiftTime={application.shiftTime}>
              {application.shiftTime}
            </ShiftTime>
            <Date>{application.date}</Date>
          </TimeAndDate>
        </RightSide>
      </MainContainer>
    </CardContainer>
  )
}

export type ApplicationsCardProps = {
  facilityName: string
  postingID: string
  date: string
  postingRole: string
  shiftTime: string
  status: string
}
export default ApplicationsCard
