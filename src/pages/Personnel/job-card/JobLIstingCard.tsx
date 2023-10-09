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
  Specialities,
} from './styles'
import { JobCardType } from '../../../_shared/@types'
import { colors } from '../../../colors'
import { MdLocationOn } from 'react-icons/md'
import GeneralButton from '../../../_shared/components/button/Button'
import { LuTimerReset } from 'react-icons/lu'
import { FaMoneyBill } from 'react-icons/fa'
import { BiCalendarEvent } from 'react-icons/bi'

const JobCard = ({ posting }: { posting: JobCardType }) => {
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
          <HospitalName>{posting.medical_facility}</HospitalName>
          <Specialities>
            {posting.required_role.map((speciality, index) => (
              <TagStyles key={index}>{speciality}</TagStyles>
            ))}
          </Specialities>
          <TagWithIcons>
            <MdLocationOn />
            Accra, Ghana
          </TagWithIcons>
        </NameAndRoleStyles>
      </JobContainerHead>
      <JobDescriptionContainer>
        <JobDescription>{posting.description}</JobDescription>
        {/* <JobDescription>GHS{rate_per_6_hour_shift}/shift</JobDescription> */}
        <AllTags>
          <TagWithIcons>
            <LuTimerReset />
            {posting.full_time ? 'Full Time' : 'Part Time'}
          </TagWithIcons>
          <TagWithIcons>
            <FaMoneyBill />${posting.rate_per_month}
          </TagWithIcons>
          <TagWithIcons>
            <BiCalendarEvent />
            {posting.application_deadline}
          </TagWithIcons>

          <GeneralButton
            title="Apply Now"
            sx={{
              padding: '12px 2rem',
              height: '2.2rem',
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
