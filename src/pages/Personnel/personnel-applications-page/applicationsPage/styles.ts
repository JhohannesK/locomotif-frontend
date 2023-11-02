import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  // align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
  gap: 3rem;
  flex-direction: row;
`
export const RightPaneContainer = styled.div`
  height: 100%;
  width: 100%;
  // background-color: blue;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

//the width inside the filter pane is only temporary until we get a mobile design
export const FilterPane = styled.div`
  display: inline-flex;
  padding: 16px;
  align-items: center;
  gap: 496px;
  border-radius: 12px;
  border: 1px solid var(--Border, #d9d9d9);
  background: green;
  width: 958px;
  height: 36px;
`

export const ApplicationCards = styled.div``
