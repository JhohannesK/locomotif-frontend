import LeftPane from '../../../../_shared/components/LeftPane/LeftPane'
import LeftPaneProfile from '../../../../_shared/components/LeftPaneProfile/LeftPaneProfile'

function FacilityLeftPane() {
  return (
    <LeftPane
      profileCard={
        <LeftPaneProfile
          imageSrc={'/src//_shared/assets/user.jpeg'}
          fullName="Korle-bu"
        />
      }
    />
  )
}

// interface LeftPaneProps {};
export default FacilityLeftPane
