import { useDispatch, useSelector } from 'react-redux'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import { RootState } from '../../../redux/store'
import SignUp from './components/signup'
import PersonnelTermsAndConditions from '../facility/components/terms_conditions'
import ProfileSetup from './components/ProfileSetup'
import UploadCV from './components/UploadCv'
import { useState } from 'react'
import { setActiveSidebar } from '../../../redux/slices/appSlice'
import { PersonnelCreateAccount } from '../types'
import CompletedSuccess from '../shared/success'

const PersonnelSignup = () => {
  const activeState = useSelector((state: RootState) => state.app.activeSidebar)

  const [userData, setUserData] = useState<PersonnelCreateAccount>({
    first_name: '',
    last_name: '',
    other_names: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const dispatch = useDispatch()

  const onHandleClick = (index: number) => {
    dispatch(setActiveSidebar({ activeSidebar: index }))
  }

  return (
    <div>
      <ConditionRenderComponent renderIf={activeState === 1}>
        <SignUp
          handleActiveState={onHandleClick}
          handleUserData={setUserData}
        />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 2}>
        {/* FIXME: There's no terms and conditions page for personnel */}
        <PersonnelTermsAndConditions />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 3}>
        <ProfileSetup handleActiveState={onHandleClick} userData={userData} />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 4}>
        <UploadCV />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 5}>
        <CompletedSuccess />
      </ConditionRenderComponent>
    </div>
  )
}

export default PersonnelSignup
