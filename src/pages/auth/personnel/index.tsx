import { useSelector } from 'react-redux'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import Layout from '../layout'
import { RootState } from '../../../redux/store'
import PersonnelTermsAndConditions from './components/terms_conditions'
import SignUp from './personnel-signup-page/signup_page'
import ProfileSetup from './components/profile_setup'
import FacilitySuccess from '../facility/components/success'
import UploadCV from './components/upload_cv'

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
        <FacilitySuccess />
      </ConditionRenderComponent>
    </Layout>
  )
}

export default PersonnelSignup
