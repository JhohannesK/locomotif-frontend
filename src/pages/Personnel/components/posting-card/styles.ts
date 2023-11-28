import styled from 'styled-components'
import { SxProps } from '@mui/material'
import Constants from '../../../../utils/constants'

export const CardSx: SxProps = {
  borderRadius: '12px',
  minWidth: '95%',
  padding: '20px',
  cursor: 'pointer',

  '@media screen and (max-width: 600px)': {
    width: '55px',
    padding: '10px',
  },
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  gap: 20px;
`

export const FacilityDetailsHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const PostingDescription = styled.div`
  cursor: pointer;
`
export const DateAndReview = styled.div`
  display: flex;
  gap: 15px;
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const FacilityNameLocation = styled.div`
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    width: 50%;
  }
`
export const LocationAndSpeciality = styled.div`
  display: flex;
  gap: 15px;
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    flex-direction: column;
    align-items: start;
    gap: 5px;
  }
`
