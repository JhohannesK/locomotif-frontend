import { colors } from '../../colors'
import {
  ContentWrapper,
  PageWrapper,
  QuestionWrapper,
  WelcomeWrapper,
  SignedInWrapper,
  UserWrapper,
  ButtonWrapper,
} from './styles'
import GeneralButton from '../../_shared/components/button/Button'
import { useState } from 'react'
import Constants from '../../utils/constants'
import routes from '../../routes'

function LandingPage() {
  const [isPersonnelClickedButton, setIsPersonnelClickedButton] =
    useState(false)
  const [isFacilityClickedButton, setIsFacilityClickedButton] = useState(false)

  return (
    <PageWrapper>
      <ContentWrapper>
        <WelcomeWrapper>Welcome!</WelcomeWrapper>
        <QuestionWrapper>Are you a Facility or a Practitioner?</QuestionWrapper>

        <ButtonWrapper>
          <UserWrapper>
            <GeneralButton
              // variantText={'contained'}
              sx={{
                backgroundColor:
                  isPersonnelClickedButton === true
                    ? colors.button.white
                    : colors.button.aquamarine,
                color: colors.button.pineGreen,
                height: isPersonnelClickedButton === true ? '4rem' : '3rem',
                width: isPersonnelClickedButton === true ? '23rem' : '20rem',
                textTransform: 'uppercase',
                ':hover': {
                  background: colors.button.aquamarine,
                },
                // borderColor: `${isFacilityClickedButton?colors.button.pineGreen:colors.button.aquamarine}`
              }}
              title="Practitioner"
              size={'large'}
              onClick={() => {
                setIsPersonnelClickedButton(true)
                setIsFacilityClickedButton(false)
              }}
            />
            <GeneralButton
              sx={{
                backgroundColor:
                  isFacilityClickedButton === true
                    ? colors.button.white
                    : colors.button.pineGreen,
                color:
                  isFacilityClickedButton === true
                    ? colors.button.aquamarine
                    : colors.button.aquamarine,
                borderColor:
                  isFacilityClickedButton === true
                    ? colors.button.pineGreen
                    : colors.button.aquamarine,
                height: isFacilityClickedButton === true ? '4rem' : '3rem',
                width: isFacilityClickedButton === true ? '23rem' : '20rem',
                textTransform: 'uppercase',
                ':hover': {
                  borderColor: colors.button.aquamarine,
                },
              }}
              variantText={'outlined'}
              title={'Facility'}
              size={'small'}
              onClick={() => {
                setIsFacilityClickedButton(true)
                setIsPersonnelClickedButton(false)
              }}
            />
          </UserWrapper>
          {isPersonnelClickedButton && (
            <SignedInWrapper>
              <GeneralButton
                variantText={'contained'}
                sx={{
                  backgroundColor: colors.button.aquamarine,
                  color: colors.button.pineGreen,
                  height: '2rem',
                  width: '9rem',
                  textTransform: 'uppercase',
                }}
                title="LOG IN"
                size={'large'}
                onClick={() => {
                  routes.navigate(Constants.ROUTES.personnel_signin)
                }}
              />
              <GeneralButton
                variantText={'outlined'}
                sx={{
                  backgroundColor: colors.button.pineGreen,
                  color: colors.button.aquamarine,
                  borderColor: colors.button.aquamarine,
                  height: '2rem',
                  width: '9rem',
                  ':hover': {
                    borderColor: colors.button.aquamarine,
                  },
                  textTransform: 'uppercase',
                }}
                title="SIGN UP"
                size={'large'}
                onClick={() => {
                  routes.navigate(Constants.ROUTES.personnel_signup)
                }}
              />
            </SignedInWrapper>
          )}
          {isFacilityClickedButton && (
            <SignedInWrapper>
              <GeneralButton
                variantText={'contained'}
                sx={{
                  backgroundColor: colors.button.aquamarine,
                  color: colors.button.pineGreen,
                  height: '2rem',
                  width: '9rem',
                  textTransform: 'uppercase',
                }}
                title="LOG IN"
                size={'large'}
                onClick={() => {
                  routes.navigate(Constants.ROUTES.facility_signin)
                }}
              />
              <GeneralButton
                variantText={'outlined'}
                sx={{
                  backgroundColor: colors.button.pineGreen,
                  color: colors.button.aquamarine,
                  borderColor: colors.button.aquamarine,
                  height: '2rem',
                  width: '9rem',
                  ':hover': {
                    borderColor: colors.button.aquamarine,
                  },
                  textTransform: 'uppercase',
                }}
                title="SIGN UP"
                size={'large'}
                onClick={() => {
                  routes.navigate(Constants.ROUTES.facility_signup)
                }}
              />
            </SignedInWrapper>
          )}
        </ButtonWrapper>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default LandingPage
