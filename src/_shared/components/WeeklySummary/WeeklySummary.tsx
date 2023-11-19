import {
  FacilityLeftMidBox,
  FacilityLeftMidTitle,
  LeftContent,
  RightContent,
  RightContentH4,
  RightContentP,
  FacilityLeftMidBoxContent,
} from './styles'
import member_one from '../../../_shared/assets/member 1.png'
import member_two from '../../../_shared/assets/member 2.png'
import member_three from '../../../_shared/assets/member 3.png'

function WeeklySummary({
  numberOfNewCandidates,
  numberOfProcessingApplications,
  numberOfAvailableJobs,
}: WeeklySummaryProps) {
  return (
    <>
      <FacilityLeftMidBox>
        <FacilityLeftMidTitle>This week's summary</FacilityLeftMidTitle>
        <FacilityLeftMidBoxContent>
          <LeftContent>
            <img
              src={member_one}
              alt="member one"
              style={{
                // height: '100%', >> only the width is needed
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </LeftContent>
          <RightContent>
            <RightContentH4>{numberOfNewCandidates}</RightContentH4>
            <RightContentP>New candidates</RightContentP>
          </RightContent>
        </FacilityLeftMidBoxContent>
        <FacilityLeftMidBoxContent>
          <LeftContent>
            <img
              src={member_two}
              alt="member two"
              style={{
                // height: '100%', >> only the width is needed
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </LeftContent>
          <RightContent>
            <RightContentH4>{numberOfProcessingApplications}</RightContentH4>
            <RightContentP>Processing applications</RightContentP>
          </RightContent>
        </FacilityLeftMidBoxContent>
        <FacilityLeftMidBoxContent>
          <LeftContent>
            <img
              src={member_three}
              alt="member three"
              style={{
                // height: '100%', >> only the width is needed
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </LeftContent>
          <RightContent>
            <RightContentH4>{numberOfAvailableJobs}</RightContentH4>
            <RightContentP>Available jobs</RightContentP>
          </RightContent>
        </FacilityLeftMidBoxContent>
      </FacilityLeftMidBox>
    </>
  )
}

interface WeeklySummaryProps {
  numberOfNewCandidates: number
  numberOfProcessingApplications: number
  numberOfAvailableJobs: number
}

export default WeeklySummary
