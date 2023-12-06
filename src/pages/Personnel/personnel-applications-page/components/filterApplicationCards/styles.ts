import styled from 'styled-components'
import { colors } from '../../../../../colors'
import { SxProps } from '@mui/material'

export const FilterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  //   justify-content: center;
  border-radius: 12px;
  border: 1px solid var(--Border, #d9d9d9);
  background: ${colors.background.white};
  height: 4rem;
  gap: 20rem;
  padding: 0 1.5rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const AddStyles: SxProps = {
  height: '100%',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '400',
  padding: '8px 16px',
}

export const ButtonStyles: SxProps = {
  height: '100%',
  borderRadius: '20px',
  border: '1px solid var(--Primary-Color, #0E6655)',
  backgroundColor: `${colors.button.white}`,
  color: `${colors.button.pineGreen}`,
  padding: '8px 16px',
  fontSize: '12px',
  fontWeight: 'normal',
}

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-left: 16px;
  height: 50%;
`

export const OrderWrapper = styled.div``
