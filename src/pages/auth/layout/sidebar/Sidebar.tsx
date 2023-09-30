import { useDispatch, useSelector } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import {
  BoxStyle,
  Logo,
  LogoAndStepsWrapper,
  StepperWrapper,
  SubTitle,
  TextWrapper,
  TitleStyles,
  Wrapper,
} from './style'
// import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'
import GeneralButton from '../../../../_shared/components/button/Button'
import { colors } from '../../../../colors'
import { RootState } from '../../../../redux/store'
import { BiStopCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Constants from '../../../../utils/constants'
import { Steps } from '../../_types'

const Sidebar = ({ steps }: { steps: Steps }) => {
  const navigate = useNavigate()
  const activeSidebar = useSelector(
    (state: RootState) => state.app.activeSidebar
  )
  const dispatch = useDispatch()

  const onHandleClick = (index: number) => {
    if (index === 0) {
      navigate(Constants.ROUTES.GetStarted)
    } else {
      dispatch(setActiveSidebar({ activeSidebar: index }))
    }
  }

  const onDisable = (index: number) => {
    if (activeSidebar === 1) {
      if (index > 1) return true
    }
    if (activeSidebar === 2) {
      if (index > 2) return true
    }
    if (activeSidebar === 3) {
      if (index < 3) return true
    }
    if (activeSidebar === 4) {
      if (index < 3) return true
    }
  }

  return (
    <Wrapper>
      <LogoAndStepsWrapper>
        <Logo>Loco</Logo>

        <StepperWrapper>
          {steps.map((step, index) => (
            <BoxStyle
              disabled={onDisable(index)}
              key={index}
              onClick={() => onHandleClick(index)}
            >
              {/* <AiOutlineCheckCircle /> */}

              {activeSidebar === index ? (
                <BiStopCircle size="23" />
              ) : (
                <BsCircle size="23" />
              )}
              <TextWrapper>
                <TitleStyles>{step.title}</TitleStyles>
                <SubTitle>{step.subTitle}</SubTitle>
              </TextWrapper>
            </BoxStyle>
          ))}
        </StepperWrapper>
      </LogoAndStepsWrapper>

      <GeneralButton
        onClick={() => navigate(Constants.ROUTES.AUTH.signin)}
        title="Already have an Acccout? Sign in"
        sx={{
          border: `1px solid ${colors.border.whiteSmoke}`,
          padding: '10px 20px',
          width: '100%',
          borderRadius: '12px',
          fontSize: '14px',
        }}
      />
    </Wrapper>
  )
}

export default Sidebar
