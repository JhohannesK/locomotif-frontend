import { useSelector } from 'react-redux'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import Layout from '../layout'
import { RootState } from '../../../redux/store'
import PersonnelTermsAndConditions from './components/terms_conditions'
import SignUp from './personnel-signup-page/signup'
import ProfileSetup from './components/profile_setup'
import UploadCV from './components/upload_cv'
import PersonnelSuccess from './components/success'

const PersonnelSignup = () => {
  const activeState = useSelector((state: RootState) => state.app.activeSidebar)
  return (
    <Layout>
      <ConditionRenderComponent renderIf={activeState === 1}>
        <SignUp />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 2}>
        <PersonnelTermsAndConditions />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 3}>
        <ProfileSetup />
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
