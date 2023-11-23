import { colors } from '../../../colors'
import { PersonnelProfilePayload } from '../../../pages/auth/_types'
import { loadFromLocalStorage } from '../../../redux/hooks/middleware'
import Constants from '../../../utils/constants'
import AvatarDisplay from '../Avatar/Avatar'
import GeneralButton from '../button/Button'
import {
  LeftPaneProfileContainer,
  LeftProfileNameContainer,
  LeftProfileWorkContainer,
  LeftProfileWorkExperienceAndWork,
  LeftProfileWorkExperienceContainer,
} from './styles'

const LeftPaneProfile = () => {
  const { PersonnelProfile } = loadFromLocalStorage({
    key: Constants.LOCALSTORAGE_KEYS.PERSONNEL_PROFILE,
  }) as { PersonnelProfile: PersonnelProfilePayload }

  const fullName = `${PersonnelProfile?.last_name} ${PersonnelProfile?.first_name}`

  return (
    <LeftPaneProfileContainer>
      <AvatarDisplay
        height={70}
        width={70}
        fullname={fullName}
        imageSrc={'/src//_shared/assets/user.jpeg'}
      />
      <LeftProfileWorkExperienceAndWork>
        <LeftProfileNameContainer>{fullName}</LeftProfileNameContainer>
        <LeftProfileWorkContainer>
          {PersonnelProfile?.specialities?.map((job) => (
            <>{job}</>
          ))}
          <LeftProfileWorkExperienceContainer>
            {PersonnelProfile?.year_of_registration}
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
          fontFamily: 'Roboto',
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
