import LeftPaneProfile from '../../../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import { LeftPaneContainer } from '../../styles'
import { LeftPaneWrapper } from './styles'

const LeftPane = () => {
  return (
    <LeftPaneWrapper>
      <LeftPaneProfile
        jobTitle="Surgeon"
        name="Nicholoas Asante"
        workExperience="5 years Experience"
      />
    </LeftPaneWrapper>
  )
}

export default LeftPane

export function LeftSide() {
  return (
    <LeftPaneContainer>
      <LeftPane />
    </LeftPaneContainer>
  )
}
