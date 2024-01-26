import { Avatar, Chip } from '@mui/material'
import { colors } from '../../../colors'
import styled from 'styled-components'
import { BiStar } from 'react-icons/bi'
import GeneralButton from '../../../_shared/components/button/Button'

const ApplicantCard = () => {
  return (
    <CardWrapper>
      <HeaderRow>
        <LeftHeader>
          <Avatar sx={{ height: '3rem', width: '3rem', fontWeight: 'bold' }}>
            GM
          </Avatar>
          <NameAndTitle>
            <p style={{ fontWeight: 'bold' }}>Dr. John Doe</p>
            <p style={{ fontSize: '12px' }}>Cardiologist</p>
          </NameAndTitle>
        </LeftHeader>
        <Chip
          label="Pending"
          sx={{ background: '#FF8E2533', color: '#FF8E25' }}
          size="small"
        />
      </HeaderRow>
      <ReviewRow>
        <p>14 Reviews</p>
        <Rating>
          <BiStar style={{ color: '#FF8E25', fontSize: '20px' }} />
          <p>4.7</p>
        </Rating>
      </ReviewRow>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic incidunt
          excepturi eveniet quod inventore! Ullam dolores quos aut nobis autem?
        </p>
      </div>
      <BtnRow>
        <GeneralButton
          sx={{
            width: '100%',
            bgcolor: 'white',
            borderRadius: '0.5rem',
            color: `${colors.text.pineGreen}`,
            border: `1px solid ${colors.border.timberwolf}`,
          }}
          title="Visit Profile"
        />
        <GeneralButton
          sx={{ width: '100%', borderRadius: '.5rem' }}
          title="View CV"
        />
      </BtnRow>
    </CardWrapper>
  )
}

export default ApplicantCard

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.6rem;
  border-radius: 0.5rem;
  background: ${colors.background.white};
  box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
  width: 100%;
  min-width: 400px;
  max-width: 600px;
  border: 1px solid ${colors.border.timberwolf};
`
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`
const NameAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`

const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

const ReviewRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
`

const Rating = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;
`

const BtnRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`
