import { colors } from '../../../colors'
import ShimmerLoading from '../../shimmer/Shimmer'
import AvatarDisplay from '../Avatar/Avatar'
import GeneralButton from '../button/Button'
import {
  LeftPaneProfileContainer,
  LeftProfileNameContainer,
  LeftProfileWorkContainer,
  LeftProfileWorkExperienceAndWork,
  LeftProfileWorkExperienceContainer,
} from './styles'

interface ILeftPaneProfileProps {
  imageSrc?: string
  fullName?: string
  specialities?: React.ReactNode
  isLoading?: boolean
}

const LeftPaneProfile = ({
  imageSrc,
  fullName,
  specialities,
  isLoading,
}: ILeftPaneProfileProps) => {
  return (
    <LeftPaneProfileContainer>
      {isLoading ? (
        <ShimmerLoading height={'5rem'} width={'5rem'} borderRadius="50%" />
      ) : (
        <AvatarDisplay
          height={70}
          width={70}
          fullname={fullName}
          imageSrc={imageSrc}
        />
      )}
      <LeftProfileWorkExperienceAndWork>
        <LeftProfileNameContainer>{fullName}</LeftProfileNameContainer>
        <LeftProfileWorkContainer>
          {specialities}
          <LeftProfileWorkExperienceContainer>
            {/* {PersonnelProfile?.year_of_registration} */}
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
