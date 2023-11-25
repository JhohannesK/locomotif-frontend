import styled from 'styled-components'
import { SxProps } from '@mui/material'

export const CardSx: SxProps = {
  borderRadius: '12px',
  minWidth: '95%',
  padding: '20px',
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

export const FacilityNameLocation = styled.div``
export const LocationAndSpeciality = styled.div`
  display: flex;
  gap: 15px;
`
