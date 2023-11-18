import {
  AuthContainer,
  AuthContent,
  AuthUpperContent,
} from '../../../../_shared/auth_styles'
import { Toast, GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useDispatch } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import Constants from '../../../../utils/constants'
import axios, { AxiosResponse } from 'axios'
import { FormEvent, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { setErrorMessages } from '../../../../utils/util'

const PersonnelTermsAndConditions = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const newData = loadFromLocalStorage({ key: 'PersonnelSubmitData' })
    console.log(newData)
    try {
      await axios
        .post(`${Constants.BaseURL}auth/signup/`, newData)
        .then((res: AxiosResponse) => {
          return res.data
          // dispatch(login({ ...responseData, isAuthenticated: true }))
        })
        .then(() => dispatch(setActiveSidebar({ activeSidebar: 3 })))
    } catch (error) {
      setErrorMessages(error, setErrorMessage)
      setIsError(true)
      console.log(error)
      setIsLoading(false)
      dispatch(setActiveSidebar({ activeSidebar: 1 }))
    }
  }
  return (
    <>
      {isError && <Toast open={isError} type="error" children={errorMessage} />}
      <AuthContainer>
        <AuthContent onSubmit={signUp}>
          <AuthUpperContent>
            <h1>Agree to our terms and Conditions</h1>
          </AuthUpperContent>
          {isLoading ? (
            <LoadingButton
              loading
              sx={{
                backgroundColor: colors.button.pineGreen,
                width: '100%',
                ':hover': {
                  backgroundColor: colors.button.antiflashWhite,
                  color: colors.text.pineGreen,
                },
              }}
            ></LoadingButton>
          ) : (
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
          )}
        </AuthContent>
      </AuthContainer>
    </>
  )
}

export default PersonnelTermsAndConditions
