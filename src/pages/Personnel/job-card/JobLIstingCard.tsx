import {
  HospitalLogo,
  HospitalName,
  JobContainer,
  JobContainerHead,
  JobDescriptionContainer,
  JobDescription,
  TagStyles,
  NameAndRoleStyles,
  TagWithIcons,
  AllTags,
} from './styles'
import { JobCardProps } from '../../../_shared/@types'
import { colors } from '../../../colors'
import { MdLocationOn } from 'react-icons/md'
import GeneralButton from '../../../_shared/components/button/Button'

const JobCard = ({
  required_role,
  description,
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
        <NameAndRoleStyles>
          <HospitalName>{facility}</HospitalName>
          <TagStyles>{required_role} </TagStyles>
        </NameAndRoleStyles>
      </JobContainerHead>
      <JobDescriptionContainer>
        <JobDescription>{description}</JobDescription>
        {/* <JobDescription>GHS{rate_per_6_hour_shift}/shift</JobDescription> */}
        <AllTags>
          <TagWithIcons>
            <MdLocationOn />
            Accra, Ghana
          </TagWithIcons>
          <TagWithIcons>
            <MdLocationOn />
            GHS {rate_per_6_hour_shift}/shift
          </TagWithIcons>

          <GeneralButton
            title="Apply Now"
            sx={{
              padding: '12px 20px',
              height: '15px',
              fontSize: '13px',
              borderRadius: '15px',
              fontWeight: 'medium',
            }}
          />
        </AllTags>
      </JobDescriptionContainer>
    </JobContainer>
  )
}
export default JobCard
