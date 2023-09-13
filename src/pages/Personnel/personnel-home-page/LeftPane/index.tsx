import LeftPaneProfile from '../../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import LeftPaneWorkExperience from '../../../../_shared/components/LeftPaneWorkExperience/LeftPaneWorkExperience'
import {
  ActualWorkExperiencesContainer,
  InnerWorkExperienceContainer,
  LeftPaneWrapper,
  WorkExperienceContainer,
  WorkExperienceTitleContainer,
} from './styles'

const LeftPane = () => {
  return (
    <>
      <LeftPaneWrapper>
        <LeftPaneProfile
          jobTitle="Surgeon"
          name="Nicholoas Asante"
          workExperience="5"
        />
        <WorkExperienceContainer>
          <InnerWorkExperienceContainer>
            <WorkExperienceTitleContainer>
              Work Experience
            </WorkExperienceTitleContainer>
            <ActualWorkExperiencesContainer>
              <LeftPaneWorkExperience
                nameOfHospital="Trust Care"
                role="Surgeon"
                duration="2018-2020"
              />
              <LeftPaneWorkExperience
                nameOfHospital="Lister Hospital"
                role="Surgeon"
                duration="2000-2012"
              />
            </ActualWorkExperiencesContainer>
          </InnerWorkExperienceContainer>
        </WorkExperienceContainer>
      </LeftPaneWrapper>
    </>
  )
}

export default LeftPane
