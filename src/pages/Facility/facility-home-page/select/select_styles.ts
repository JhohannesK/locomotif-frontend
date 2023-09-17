import { styled } from 'styled-components'
import Constants from '../../../../utils/constants'

export const SelectContainer = styled.div`
  width: 140px;
  minheight: 10px;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    width: 120px;
  }
`
