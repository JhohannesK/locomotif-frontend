import {
  HospitalLogo,
  JobContainer,
  JobContainerHead,
  JobContainerRight,
  JobDescription,
  JobLocation,
  JobTitle,
  RateAndShift,
  ShiftContainer,
} from './styles'
import { JobCardProps } from '../../../_shared/@types'
import { colors } from '../../../colors'

const JobCard = ({
  required_role,
  description,
  shift,
  rate_per_6_hour_shift,
  facility,
}: JobCardProps) => {
  return (
    <JobContainer>
      <JobContainerHead>
        <HospitalLogo>
          <div
            style={{
              height: '3rem',
              width: '3rem',
              borderRadius: '50%',
              background: `${colors.background.timberwolf}`,
            }}
          />
        </HospitalLogo>
        <JobLocation>{facility}</JobLocation>
      </JobContainerHead>
      <JobContainerRight>
        <JobTitle>{required_role} </JobTitle>
        <JobDescription>{description}</JobDescription>
        <RateAndShift>
          <JobDescription>GHS{rate_per_6_hour_shift}/shift</JobDescription>
          <ShiftContainer>{shift}</ShiftContainer>
          <div>
            <button>Apply</button>
          </div>
        </RateAndShift>
      </JobContainerRight>
    </JobContainer>
  )
}
export default JobCard
