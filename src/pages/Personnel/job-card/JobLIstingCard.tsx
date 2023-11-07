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
  Wrapper,
  ButtonStyles,
} from './styles'
import { JobCardType } from '../../../_shared/@types'
import { colors } from '../../../colors'
import { MdLocationOn } from 'react-icons/md'
import GeneralButton from '../../../_shared/components/button/Button'
import { LuTimerReset } from 'react-icons/lu'
import { FaMoneyBill } from 'react-icons/fa'
import { BiCalendarEvent } from 'react-icons/bi'
// import { Wrapper } from './styles'

const JobCard = ({
  posting,
  handleOpen,
}: {
  posting: JobCardType
  handleOpen: () => void
}) => {
  // const theme = useTheme()
  return (
    <JobContainer onClick={handleOpen}>
      <Wrapper>
        <JobContainerHead>
          <HospitalLogo>
            <div
              style={{
                height: '4rem',
                width: '4rem',
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
            <JobDescription>{posting.description}</JobDescription>
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
              <ButtonStyles>
                <GeneralButton
                  title="Apply Now"
                  sx={{
                    // [theme.breakpoints.down('sm')]: {
                    //   fontSize: '10px',
                    // },
                    padding: '12px 2rem',
                    height: '2.2rem',
                    fontSize: '13px',
                    borderRadius: '15px',
                    fontWeight: 'medium',
                  }}
                />
              </ButtonStyles>
            </AllTags>
          </NameAndRoleStyles>
        </JobContainerHead>
        <JobDescriptionContainer></JobDescriptionContainer>
      </Wrapper>
    </JobContainer>
  )
}

// const JobCard = ({ posting }: { posting: JobCardType }) => {
//   return (
//     <Wrapper>
//       <div style={{ height: '100%', width: '100%', padding: '10px' }}>
//         asdfa
//       </div>
//     </Wrapper>
//   )
// }
export default JobCard
