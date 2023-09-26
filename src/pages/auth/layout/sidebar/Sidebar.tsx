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

interface IStep {
  title: string
  subTitle: string
}

type Steps = Array<IStep>

const Sidebar = ({ steps }: { steps: Steps }) => {
  const activeSidebar = useSelector(
    (state: RootState) => state.app.activeSidebar
  )
  const dispatch = useDispatch()

  const onHandleClick = (index: number) => {
    console.log(index)
    dispatch(setActiveSidebar({ activeSidebar: index }))
  }

  return (
    <Wrapper>
      <LogoAndStepsWrapper>
        <Logo>Loco</Logo>

        <StepperWrapper>
          {steps.map((step, index) => (
            <BoxStyle key={index} onClick={() => onHandleClick(index)}>
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
        title="Already have an Acccout? Sign in"
        sx={{
          border: `1px solid ${colors.border.whiteSmoke}`,
          padding: '10px 20px',
          width: '100%',
          borderRadius: '12px',
        }}
      />
    </Wrapper>
  )
}

export default Sidebar
