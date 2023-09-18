import { styled } from 'styled-components'
import { colors } from '../../../../colors'
import Constants from '../../../../utils/constants'

export const JobPostBox = styled.div`
  width: 100%;
  height: 300px;
  background: ${colors.button.white};
  border-radius: 10px;
  border: 1px solid #d1d1d1;
  padding: 10px;
`

export const JobPostButtons = styled.div`
  width: 50%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    width: 70%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_MOBILE_PX} {
    width: 70%;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    width: 100%;
  }
`

export const JobPostHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const JobPostOptions = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    gap: 3px;
  }
`

export const JobPostTextContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`

export const JobPostTitle = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.14%;

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_MOBILE_PX} {
    font-size: 22px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    font-size: 20px;
  }
`
