import {
  JobContainer,
  JobContainerLeft,
  JobContainerRight,
  JobDescription,
  JobLocation,
  JobTitle,
  RateAndShift,
  ShiftContainer,
} from './styles'
import { JobCardProps } from '../../../general/@types'

const JobCard = ({
  required_role,
  description,
  shift,
  rate_per_6_hour_shift,
  facility,
}: JobCardProps) => {
  return (
    <JobContainer>
      <JobContainerLeft>
        <JobTitle>{required_role} </JobTitle>
      </JobContainerLeft>
      <JobContainerRight>
        <JobLocation>{facility}</JobLocation>
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
