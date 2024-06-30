import { ConditionRenderComponent } from '@/utils/ConditionRender'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
// import FacilityTermsAndConditions from '../shared/terms_conditions'
import { setActiveSidebar } from '@/redux/slices/appSlice'
import { useState } from 'react'

import { TFacilityAuthSteps } from '@/types'
import FacilityCreateAccount from './CreateAccount'
import FacilitySetUpProfile from './SetupProfile'
import CompletedSuccess from '../../shared/success'

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
    <div>
      <ConditionRenderComponent
        renderIf={activeState === TFacilityAuthSteps['Create Account']}
      >
        <FacilityCreateAccount
          handleActiveState={onHandleClick}
          handleUserData={setUserData}
        />
      </ConditionRenderComponent>
      {/* <ConditionRenderComponent renderIf={activeState === 2}>
        <FacilityTermsAndConditions />
      </ConditionRenderComponent> */}
      <ConditionRenderComponent
        renderIf={activeState === TFacilityAuthSteps['Create Profile']}
      >
        <FacilitySetUpProfile
          handleActiveState={onHandleClick}
          userData={userData}
        />
      </ConditionRenderComponent>
      <ConditionRenderComponent
        renderIf={activeState === TFacilityAuthSteps.Completed}
      >
        <CompletedSuccess />
      </ConditionRenderComponent>
    </div>
  )
}

export default FacilitySignUp
