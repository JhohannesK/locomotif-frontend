import { useDispatch, useSelector } from 'react-redux'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import Layout from '../layout/Layout'
import { RootState } from '../../../redux/store'
import SignUp from './personnel-signup-page/signup'
import PersonnelTermsAndConditions from '../shared/terms_conditions'
import ProfileSetup from './components/ProfileSetup'
import UploadCV from './components/UploadCv'
import { useState } from 'react'
import { setActiveSidebar } from '../../../redux/slices/appSlice'
import { PersonnelCreateAccount } from '../_types'
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
    <Layout>
      <ConditionRenderComponent renderIf={activeState === 1}>
        <SignUp
          handleActiveState={onHandleClick}
          handleUserData={setUserData}
        />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 2}>
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
    </Layout>
  )
}

export default PersonnelSignup
