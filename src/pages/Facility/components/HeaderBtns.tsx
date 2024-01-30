import styled from 'styled-components'
import GeneralButton from '../../../_shared/components/button/Button'
import Constants from '../../../utils/constants'
import { SxProps } from '@mui/material'
import { colors } from '../../../colors'
import { BsBookmark } from 'react-icons/bs'

const HeaderBtns = () => {
  return (
    <Wrapper>
      <GeneralButton sx={sx} title="Clear" />
      <GeneralButton sx={sx} title="Restart" />
      <IconStyle>
        <BsBookmark />
      </IconStyle>
    </Wrapper>
  )
}

export default HeaderBtns

const sx: SxProps = {
  bgcolor: '#fff',
  color: `${colors.text.pineGreen}`,
  height: '100%',
  paddingX: '1.5rem',
  paddingY: '0.5rem',
  border: `1px solid ${colors.border.timberwolf}`,
  boxShadow: '0px 2px 2px rgba(87, 86, 86, 0.25)',
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    gap: 2.5rem;
  }
  height: 3rem;
  margin-bottom: 1.5rem;
`

const IconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  border: 1px solid ${colors.border.timberwolf};
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
`
