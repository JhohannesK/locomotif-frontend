import { styled } from 'styled-components'
import Constants from '../../../../utils/constants'

export const SelectContainer = styled.div`
  width: 140px;
  max-height: 60px;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    width: 120px;
  }
`
