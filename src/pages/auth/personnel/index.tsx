import { useSelector } from 'react-redux'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import Layout from '../layout'
import { RootState } from '../../../redux/store'

const PersonnelSignup = () => {
  const activeState = useSelector((state: RootState) => state.app.activeSidebar)
  return (
    <Layout>
      <ConditionRenderComponent renderIf={activeState === 1}>
        <div>Personnel Signup</div>
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 2}>
        <div>The second component</div>
      </ConditionRenderComponent>
    </Layout>
  )
}

export default PersonnelSignup
