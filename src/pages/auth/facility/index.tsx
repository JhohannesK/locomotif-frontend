import Layout from '../layout'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const FacilitySignUp = () => {
  const activeState = useSelector((state: RootState) => state.app.activeSidebar)

  return (
    <Layout>
      <ConditionRenderComponent renderIf={activeState === 1}>
        <div>Facility Signup</div>
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 2}>
        <div>The second component</div>
      </ConditionRenderComponent>
    </Layout>
  )
}

export default FacilitySignUp
