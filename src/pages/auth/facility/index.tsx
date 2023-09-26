import Layout from '../layout'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import FacilityCreateAccount from './components/create_account'
import FacilityTermsAndCondions from './components/terms_conditions'
import FacilitySetUpProfile from './components/setup_profile'
import FacilitySuccess from './components/success'

const FacilitySignUp = () => {
  const activeState = useSelector((state: RootState) => state.app.activeSidebar)

  return (
    <Layout>
      <ConditionRenderComponent renderIf={activeState === 1}>
        <FacilityCreateAccount />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 2}>
        <FacilityTermsAndCondions />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 3}>
        <FacilitySetUpProfile />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 4}>
        <FacilitySuccess />
      </ConditionRenderComponent>
    </Layout>
  )
}

export default FacilitySignUp
