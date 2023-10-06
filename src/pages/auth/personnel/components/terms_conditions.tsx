import {
  AuthContainer,
  AuthContent,
  AuthUpperContent,
} from '../../../../_shared/auth_styles'
import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useDispatch } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import Constants from '../../../../utils/constants'
import axios from 'axios'

const PersonnelTermsAndConditions = () => {
  const dispatch = useDispatch()
  const signUp = async () => {
    const newData = loadFromLocalStorage({ key: 'PersonnelSubmitData' })
    console.log(newData)
    await axios
      .post(`${Constants.BaseURL}auth/signup/`, newData)
      .then(() => dispatch(setActiveSidebar({ activeSidebar: 3 })))
  }
  return (
    <>
      <AuthContainer>
        <AuthContent>
          <AuthUpperContent>
            <h1>Agree to our terms and Conditions</h1>
          </AuthUpperContent>

          <GenericButton
            onClick={() => signUp}
            title="I Agree"
            sx={{
              backgroundColor: colors.button.pineGreen,
              width: '100%',
              borderRadius: '10px',
              color: '#F6FBFF',
              textAlign: 'center',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '137.14%',
              marginTop: '2rem',
            }}
            size="large"
          />
        </AuthContent>
      </AuthContainer>
    </>
  )
}

export default PersonnelTermsAndConditions
