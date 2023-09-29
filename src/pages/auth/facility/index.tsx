import Layout from '../layout'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import FacilityCreateAccount from './components/create_account'
import FacilityTermsAndCondions from './components/terms_conditions'
import FacilitySetUpProfile from './components/setup_profile'
import FacilitySuccess from './components/success'
import { setActiveSidebar } from '../../../redux/slices/appSlice'
import { useState } from 'react'

const FacilitySignUp = () => {
  const activeState = useSelector((state: RootState) => state.app.activeSidebar)

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
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
        <FacilityTermsAndCondions userData={userData} />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 3}>
        <FacilitySetUpProfile handleActiveState={onHandleClick} />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={activeState === 4}>
        <FacilitySuccess />
      </ConditionRenderComponent>
    </Layout>
  )
}

export default FacilitySignUp
