import styled from 'styled-components'
import { colors } from '../../../../../colors'
import Constants from '../../../../../utils/constants'

export const CardContainer = styled.div`
  padding: 16px;
  border-radius: 12px;
  background: ${colors.background.white};
  border: 1px solid var(--Border, #d9d9d9);
  max-width: 19rem;
  height: 81px;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    max-width: 100%;
  }
`

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 53px;
  justify-content: space-between;
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
`

export const HospitalNameAndImage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const HospitalImage = styled.div`
  outline: 1px solid orange;
  height: 27px;
  width: 27px;
  clip-path: circle();
  background-color: #d9d9d9;
  background-size: cover;
  background-position: center center;
`

export const HospitalName = styled.div`
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`

export const PostingRoleAndId = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostingRole = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const PostingId = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

interface StatusProps {
  $status?: string
}
export const Status = styled.div<StatusProps>`
  border-radius: 20px;
  color: ${({ $status }) => {
    switch ($status) {
      case 'Approved':
        return 'var(--Primary-Color, #0E6655)'
      case 'Declined':
        return '#FF1515'
      case 'Pending':
        return '#FF8E25'
      case 'On Hold':
        return '#FF9882'
      default:
        return 'var(--Primary-Color, #0E6655)'
    }
  }};
  background: ${({ $status }) => {
    switch ($status) {
      case 'Approved':
        return '#D7FFF7'
      case 'Declined':
        return '#rgba(255, 21, 21, 0.20)'
      case 'Pending':
        return 'rgba(255, 142, 37, 0.20)'
      case 'On Hold':
        return '#rgba(248, 238, 151, 0.30)'
      default:
        return '#D7FFF7'
    }
  }};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 4px 16px;
`

export const TimeAndDate = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
interface ShiftTimeProps {
  $shiftTime?: string
}
export const ShiftTime = styled.div<ShiftTimeProps>`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: ${({ $shiftTime }) => {
    switch ($shiftTime) {
      case 'Morning':
        return 'rgba(13, 153, 255, 0.20)'
      case 'Afternoon':
        return 'rgba(255, 142, 37, 0.20)'
      case 'Evening':
        return 'rgba(13, 153, 255, 0.10)'
      default:
        return 'rgba(13, 153, 255, 0.20)'
    }
  }};
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  color: ${({ $shiftTime }) => {
    switch ($shiftTime) {
      case 'Morning':
        return '#29ABFF'
      case 'Afternoon':
        return '#FF8E25'
      case 'Evening':
        return '#14AE5C'
      default:
        return '#29ABFF'
    }
  }};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 57px;
`

export const Date = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
