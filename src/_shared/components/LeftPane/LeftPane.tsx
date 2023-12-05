import { LeftPaneContainer } from '../../../pages/Personnel/personnel-home-page/styles'
import { LeftPaneWrapper } from './styles'

export default function LeftPane({
  profileCard,
}: {
  profileCard: React.ReactNode
}) {
  return (
    <LeftPaneContainer>
      <LeftPaneWrapper>
        {profileCard}
        {/* <LeftPaneProfile /> */}
      </LeftPaneWrapper>
    </LeftPaneContainer>
  )
}
