import {
  JobContainer,
  JobContainerLeft,
  JobContainerRight,
  JobDescription,
  JobLocation,
  JobTitle,
} from '../../pages/Personnel/personnel-home-page/home_page_style'
import { JobCardProps } from '../@types'

const JobCard = ({
  title,
  description,
  rate_per_6_hour_shift,
  facility,
}: JobCardProps) => {
  return (
    <JobContainer>
      <JobContainerLeft>
        <JobTitle>{title} </JobTitle>
      </JobContainerLeft>
      <JobContainerRight>
        <JobLocation>{facility}</JobLocation>
        <JobDescription>{description}</JobDescription>
        <JobDescription>GHS{rate_per_6_hour_shift}/shift</JobDescription>
      </JobContainerRight>
    </JobContainer>
  )
}
export default JobCard
