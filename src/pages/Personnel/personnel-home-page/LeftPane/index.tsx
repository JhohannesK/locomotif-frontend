import LeftPaneProfile from '../../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import { LeftPaneWrapper } from './styles'

const LeftPane = () => {
  return (
    <>
      <LeftPaneWrapper>
        <LeftPaneProfile
          jobTitle="Surgeon"
          name="Nicholoas Asante"
          workExperience="5 years Experience"
        />
      </LeftPaneWrapper>
    </>
  )
}

export default LeftPane
