import { Logo, StepperWrapper, Wrapper } from './style'

const Sidebar = ({ steps }: { steps: Array<string> }) => {
  console.log('🚀 ~ file: Sidebar.tsx:2 ~ Sidebar ~ steps:', steps)
  return (
    <Wrapper>
      <Logo>Loco</Logo>

      <StepperWrapper>
        {steps.map((step, index) => (
          <div key={index}>{step}</div>
        ))}
      </StepperWrapper>
    </Wrapper>
  )
}

export default Sidebar
