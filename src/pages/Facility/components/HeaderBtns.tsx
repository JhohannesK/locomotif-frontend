import styled from 'styled-components'
import GeneralButton from '../../../_shared/components/button/Button'
import Constants from '../../../utils/constants'
import { SxProps } from '@mui/material'
import { colors } from '../../../colors'

const HeaderBtns = () => {
  return (
    <Wrapper>
      <GeneralButton sx={sx} title="Clear" />
      <GeneralButton sx={sx} title="Restart" />
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
  width: '100%',
  border: `1px solid ${colors.border.timberwolf}`,
  boxShadow: '0px 2px 2px rgba(87, 86, 86, 0.25)',
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  ${Constants.LAYOUT.MEDIA_QUERIES.TABLET_PX} {
    gap: 2.5rem;
  }
  height: 3rem;
  width: 100%;
  margin-bottom: 1.5rem;
`
