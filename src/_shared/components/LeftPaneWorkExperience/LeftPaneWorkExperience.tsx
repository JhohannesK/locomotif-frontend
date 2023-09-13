import {
  CompanyImageContainer,
  CompanyName,
  CompanyNameDurationRoleContainer,
  Duration,
  DurationRoleContainer,
  IndividualExperiece,
  Role,
} from './styles'

const LeftPaneWorkExperience = ({
  nameOfHospital,
  role,
  duration,
}: LeftWorkExperienceProps) => {
  return (
    <IndividualExperiece>
      <CompanyImageContainer>
        {/* insert image of company here if available */}
      </CompanyImageContainer>

      <CompanyNameDurationRoleContainer>
        <CompanyName>{nameOfHospital}</CompanyName>
        <DurationRoleContainer>
          <Role>{role} |</Role>
          <Duration>{duration}</Duration>
        </DurationRoleContainer>
      </CompanyNameDurationRoleContainer>
    </IndividualExperiece>
  )
}

interface LeftWorkExperienceProps {
  nameOfHospital: string
  role: string
  duration: string
}

export default LeftPaneWorkExperience
