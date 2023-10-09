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
import axios, { AxiosResponse } from 'axios'
import { FormEvent } from 'react'
import { login } from '../../../../redux/slices/authSlice'

const PersonnelTermsAndConditions = () => {
  const dispatch = useDispatch()
  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newData = loadFromLocalStorage({ key: 'PersonnelSubmitData' })
    console.log(newData)
    await axios
      .post(`${Constants.BaseURL}auth/signup/`, newData)
      .then((res: AxiosResponse) => {
        const responseData = res.data
        dispatch(login({ ...responseData, isAuthenticated: true }))
      })
      .then(() => dispatch(setActiveSidebar({ activeSidebar: 3 })))
  }
  return (
    <>
      <AuthContainer>
        <AuthContent onSubmit={signUp}>
          <AuthUpperContent>
            <h1>Agree to our terms and Conditions</h1>
          </AuthUpperContent>

          <GenericButton
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
