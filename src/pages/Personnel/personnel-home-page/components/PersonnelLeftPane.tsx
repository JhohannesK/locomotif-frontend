import { useSelector } from 'react-redux'
import LeftPane from '../../../../_shared/components/LeftPane/LeftPane'
import LeftPaneProfile from '../../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import { RootState } from '../../../../redux/store'
import { PersonnelProfilePayload } from '../../../auth/_types'
import Constants from '../../../../utils/constants'

const PersonnelLeftPane = () => {
  const { PersonnelProfile } = loadFromLocalStorage({
    key: Constants.LOCALSTORAGE_KEYS.PERSONNEL_PROFILE,
  }) as { PersonnelProfile: PersonnelProfilePayload }
  const isLoading = useSelector((state: RootState) => state.auth.isLoading)

  const fullName = `${PersonnelProfile?.last_name} ${PersonnelProfile?.first_name}`

  return (
    <LeftPane
      profileCard={
        <LeftPaneProfile
          imageSrc={'/src//_shared/assets/user.jpeg'}
          fullName={fullName}
          isLoading={isLoading}
          specialities={
            <>
              {PersonnelProfile?.specialities?.map((job) => (
                <>{job}</>
              ))}
            </>
          }
        />
      }
    />
  )
}

export default PersonnelLeftPane
