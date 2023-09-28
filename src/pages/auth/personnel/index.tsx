import { useSelector } from 'react-redux'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import Layout from '../layout'
import { RootState } from '../../../redux/store'
import TermsAndConditions from './TermsAndConditions'
import SignUpPage from '../../Personnel/personnel-signup-page/signup_page'
import ProfileSetup from '../../Personnel/personnel-signup-page/ProfileSetup'

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
        <div>The fourth component</div>
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 5}>
        <div>The fifth component</div>
      </ConditionRenderComponent>
    </Layout>
  )
}

export default PersonnelSignup
