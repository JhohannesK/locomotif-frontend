import { styled } from 'styled-components'
import { colors } from '../../../colors'
import Constants from '../../../utils/constants'
import { SxProps } from '@mui/material'

export const SearchStyles: SxProps = {
  width: '100%',
  borderColor: 'red',
  background: `${colors.background.white}`,
  borderRadius: '10px',
}

export const ButtonStyles: SxProps = {
  borderRadius: '15px',
  border: '1px solid white',
  padding: '10px',
  width: '25%',
  fontSize: '13px',
  fontWeight: 'medium',
}

export const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
  gap: 3rem;
`

export const HomePageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  /* ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    height: 100%;
    padding: 3rem 1rem;
  } */
`

export const MidContent = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  color: ${colors.text.platinum};
  justify-content: space-around;
  align-items: flex-start;
  background-color: ${colors.background.pineGreen};
  border-radius: 15px;
  padding: 30px 20px;
`

export const MidContentText = styled.p`
  color: ${colors.text.white};
  font-weight: 600;
  text-align: left;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    font-size: 1.3rem;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    font-size: 1.3rem;
  }
`

export const AboutText = styled.p`
  color: ${colors.text.platinum};
  font-size: 12px;
  text-align: left;
  margin-top: 7px;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    font-size: 13px;
  }

  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    font-size: 16px;
  }
`

export const LowerContent = styled.section`
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    /* background: red; */
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const LowerContentContainer = styled.div`
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    margin: 0;
  }
  width: 100%;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 2rem;

  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_PX} {
    justify-content: space-between;
  }
`

export const PostingStyles = styled.aside`
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE_SM} {
    width: 100%;
    height: 100%;
  }
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`

export const JobsContainer = styled.div`
  /* background-color: ${colors.background.pineGreen}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* height: 80rem; */
  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    margin: 0;
    /* width: 100%; */
  }
`
export const LeftPaneContainer = styled.div`
  ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_M_PX} {
    display: flex;
    width: 40%;
  }
  display: none;
`

export const FilterContainer = styled.div`
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX_3} {
    display: none;
  }
  display: flex;
  flex-direction: column;
`
