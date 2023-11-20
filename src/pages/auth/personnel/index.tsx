import { useDispatch, useSelector } from 'react-redux'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import Layout from '../layout'
import { RootState } from '../../../redux/store'
import PersonnelTermsAndConditions from './components/terms_conditions'
import SignUp from './personnel-signup-page/signup'
import ProfileSetup from './components/profile_setup'
import UploadCV from './components/upload_cv'
import PersonnelSuccess from './components/success'
import { useState } from 'react'
import { setActiveSidebar } from '../../../redux/slices/appSlice'
import { PersonnelCreateAccount } from '../_types'

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
    <Layout>
      <ConditionRenderComponent renderIf={activeState === 1}>
        <SignUp
          handleActiveState={onHandleClick}
          handleUserData={setUserData}
        />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 2}>
        <PersonnelTermsAndConditions userData={userData} />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 3}>
        <ProfileSetup handleActiveState={onHandleClick} userData={userData} />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 4}>
        <UploadCV />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 5}>
        <PersonnelSuccess />
      </ConditionRenderComponent>
    </Layout>
  )
}

export default PersonnelSignup
