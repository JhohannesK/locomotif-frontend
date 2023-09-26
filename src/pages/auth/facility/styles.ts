import styled from 'styled-components'
import Constants from '../../../utils/constants'

export const SelectBox = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_MOBILE_PX} {
    gap: 10px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_580_PX} {
    display: flex;
    flex-wrap: wrap;

    & > * {
      flex: 1 1 160px;
    }
  }
`

export const ButtonsBox = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const UpperContentH1 = styled.h1`
  width: 100%;
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%; /* 68.57px */
`

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
