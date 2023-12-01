import LeftPaneProfile from '../../../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import { LeftPaneContainer } from '../../styles'
import { LeftPaneWrapper } from './styles'

export default function LeftPane() {
  return (
    <LeftPaneContainer>
      <LeftPaneWrapper>
        <LeftPaneProfile />
      </LeftPaneWrapper>
    </LeftPaneContainer>
  )
}
