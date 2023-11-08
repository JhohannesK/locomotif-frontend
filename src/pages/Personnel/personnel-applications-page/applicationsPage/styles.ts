import styled from 'styled-components'
import Constants from '../../../../utils/constants'

export const Wrapper = styled.div`
  // background-color: red;
  display: flex;
  /* align-items: center; */
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
  gap: 3rem;
`
export const RightPaneContainer = styled.div`
  height: 100%;
  width: 100%;
  // background-color: blue;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const LeftPaneContainer = styled.div`
  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_M_PX} {
    display: flex;
  }
  display: none;
`

export const ApplicationCardsContainer = styled.div`
  align-items: center;
  justify-content: center;
`
