import Layout from '../layout/Layout'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import FacilityTermsAndConditions from '../shared/terms_conditions'
import FacilitySuccess from '../shared/success'
import { setActiveSidebar } from '../../../redux/slices/appSlice'
import { useState } from 'react'
import FacilityCreateAccount from './components/CreateAccount'
import FacilitySetUpProfile from './components/SetupProfile'

const FacilitySignUp = () => {
  const activeState = useSelector((state: RootState) => state.app.activeSidebar)

  const [userData, setUserData] = useState({
    name: '',
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
        <FacilityCreateAccount
          handleActiveState={onHandleClick}
          handleUserData={setUserData}
        />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 2}>
        <FacilityTermsAndConditions />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 3}>
        <FacilitySetUpProfile
          handleActiveState={onHandleClick}
          userData={userData}
        />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 4}>
        <FacilitySuccess />
      </ConditionRenderComponent>
    </Layout>
  )
}

export default FacilitySignUp
