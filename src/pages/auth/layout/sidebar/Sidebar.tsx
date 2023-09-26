import { useDispatch } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import { Logo, StepperWrapper, Wrapper } from './style'

const Sidebar = ({ steps }: { steps: Array<string> }) => {
  const dispatch = useDispatch()

  const onHandleClick = (index: number) => {
    console.log(index)
    dispatch(setActiveSidebar({ activeSidebar: index }))
  }

  return (
    <Wrapper>
      <Logo>Loco</Logo>

      <StepperWrapper>
        {steps.map((step, index) => (
          <div key={index} onClick={() => onHandleClick(index)}>
            {step}
          </div>
        ))}
      </StepperWrapper>
    </Wrapper>
  )
}

export default Sidebar
