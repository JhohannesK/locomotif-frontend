import { IoIosArrowBack } from 'react-icons/io'
import styled from 'styled-components'
import { colors } from '../../../colors'
import Constants from '../../../utils/constants'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const { facility } = Constants.ROUTES.PAGES.FACILITY
  return (
    <Wrapper>
      <IconStyle onClick={() => navigate(facility)}>
        <IoIosArrowBack />
      </IconStyle>
      <TextBox>
        <p>Publishing a Job</p>
      </TextBox>
    </Wrapper>
  )
}

export default Header

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
  width: 100%;
`

const IconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  border: 1px solid ${colors.border.timberwolf};
  background-color: ${colors.background.white};
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
  cursor: pointer;
`

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.border.timberwolf};
  height: 100%;
  gap: 1rem;
  border-radius: 0.5rem;
  background: ${colors.background.white};
  box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
  flex-grow: 1;
`
