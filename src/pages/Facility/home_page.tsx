import { styled } from 'styled-components'
import FacilityLayout from './components/Layout/Layout'

function FacilityHomePage() {
  return (
    <Wrapper>
      <FacilityLayout.LeftPane />
      <FacilityLayout.Overview />
    </Wrapper>
  )
}

export default FacilityHomePage

const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  gap: 2.8rem;
`
