import { useSelector } from 'react-redux'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import Layout from '../layout'
import { RootState } from '../../../redux/store'
import TermsAndConditions from './components/terms_conditions'
import SignUpPage from '../../Personnel/personnel-signup-page/signup_page'
import ProfileSetup from './components/profile_setup'
import FacilitySuccess from '../facility/components/success'
import UploadCV from './components/upload_cv'

const PersonnelSignup = () => {
  const activeState = useSelector((state: RootState) => state.app.activeSidebar)
  return (
    <Layout>
      <ConditionRenderComponent renderIf={activeState === 1}>
        <SignUpPage />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 2}>
        <TermsAndConditions />
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
