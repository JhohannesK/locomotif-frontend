import { formatDate } from '../../../../../utils/util'
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
  HospitalImage,
} from './styles'
const ApplicationsCard = ({
  application,
  index,
}: {
  application: ApplicationsCardProps
  index: number
}) => {
  const MAX_LENGTH = 20
  return (
    <CardContainer key={index}>
      <MainContainer>
        <LeftSide>
          <HospitalNameAndImage>
            <HospitalImage></HospitalImage>
            <HospitalName>
              {application.facilityName.length < MAX_LENGTH
                ? application.facilityName
                : application.facilityName.slice(0, MAX_LENGTH) + '...'}
            </HospitalName>
          </HospitalNameAndImage>
          <PostingRoleAndId>
            <PostingId>{application.postingID}</PostingId>
            <PostingRole>{application.postingRole}</PostingRole>
          </PostingRoleAndId>
        </LeftSide>
        <RightSide>
          <Status $status={application.status}> {application.status}</Status>
          <TimeAndDate>
            <ShiftTime $shiftTime={application.shiftType}>
              {application.shiftType}
            </ShiftTime>
            <Date>{formatDate(application.date)}</Date>
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
  shiftType: string
  status: string
}
export default ApplicationsCard
