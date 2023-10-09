import { styled } from 'styled-components'
import { colors } from '../../../colors'
import Constants from '../../../utils/constants'

export const JobContainer = styled.div`
  background: ${colors.background.whiteSmoke};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 20px;
  gap: 10px;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
  }
`

export const HospitalLogo = styled.div``

export const JobContainerHead = styled.div`
  color: #fff;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`

export const JobDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* padding: 0 10px 10px 30px; */
  /* background-color: inherit; */
`
export const TagStyles = styled.div`
  color: ${colors.text.night};
  background-color: ${colors.background.timberwolf};
  width: fit-content;
  font-size: 13px;
  padding: 5px 10px;
  border-radius: 10px;
  opacity: 0.8;
`

export const Specialities = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const JobDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`

export const HospitalName = styled.h3`
  font-size: 20px;
  letter-spacing: 0.3px;
  color: ${colors.text.night};
`

export const NameAndRoleStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  align-items: flex-start;
`

export const TagWithIcons = styled(TagStyles)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 5px;
`

export const AllTags = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`
