import { Paper, SxProps } from '@mui/material'
import styled from 'styled-components'
import { colors } from '../../../colors'

export const PostingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
  /* align-items: center; */
  @media only screen and (max-width: 900px) {
    margin-bottom: 100vh;
  }
`

// Styles for Header
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`

// Styles for Overview
export const OverviewWrapper = styled(Paper)`
  height: 100%;
`
export const ListItemView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  margin-bottom: 10px;
`
export const ButtonStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media only screen and (max-width: 900px) {
    padding: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 96%;
    gap: 10px;
    background-color: ${colors.background.whiteSmoke};
  }
`

export const BtnStyles: SxProps = {
  padding: '10px',
  flexGrow: 1,
  width: '100%',
  border: `1px solid ${colors.border.timberwolf}`,
}

// Styles for description
export const DescriptionWrapper = styled(Paper)`
  height: 100%;
`

// Styles for Revew and rating
export const ReviewAndRatingWrapper = styled(Paper)`
  height: 100%;
`
export const RatingStyles = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 10px;
`
export const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`
