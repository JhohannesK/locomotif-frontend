import { colors } from '../../../colors'
import GeneralButton from '../button/Button'
import {
  LeftPaneProfileContainer,
  LeftProfileNameContainer,
  LeftProfileWorkContainer,
  LeftProfileWorkExperienceAndWork,
  LeftProfileWorkExperienceContainer,
  NavBarUserImageProfile,
} from './styles'
// import image from '../../../assets/user.jpeg'

const LeftPaneProfile = ({
  name,
  jobTitle,
  workExperience,
}: LeftProfileProps) => {
  return (
    <LeftPaneProfileContainer>
      <NavBarUserImageProfile>
        {/* <img
              src={image}
              alt="health-leaf icon"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            /> */}
      </NavBarUserImageProfile>
      <LeftProfileWorkExperienceAndWork>
        <LeftProfileNameContainer>{name}</LeftProfileNameContainer>
        <LeftProfileWorkContainer>
          {jobTitle} |{' '}
          <LeftProfileWorkExperienceContainer>
            {workExperience}
          </LeftProfileWorkExperienceContainer>
        </LeftProfileWorkContainer>
      </LeftProfileWorkExperienceAndWork>

      <GeneralButton
        title="Edit Profile"
        sx={{
          backgroundColor: `${colors.button.pineGreen}`,
          borderRadius: '10px',
          color: `${colors.button.white}`,
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '15px',
          fontWeight: '400',
          lineHeight: '137.14%',
          width: '48%',
        }}
      />
    </LeftPaneProfileContainer>
  )
}
export default LeftPaneProfile

interface LeftProfileProps {
  name: string
  jobTitle: string
  workExperience: string
}
