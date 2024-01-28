import styled from 'styled-components'
import { colors } from '../../../colors'
import { Avatar } from '@mui/material'
import { BiStar } from 'react-icons/bi'
import GeneralButton from '../../../_shared/components/button/Button'
import LocoProgressBars from '../../../_shared/components/ProgressBar'

const ProfileCard = () => {
  const progressValue: number = 78
  return (
    <Wrapper>
      <Avatar sx={{ height: '6rem', width: '6rem', fontWeight: 'bold' }}>
        GM
      </Avatar>
      <NameContainer>
        <HospitalName>Lister Hospital</HospitalName>
        <div>
          Cardiac hospital <span>|</span> <BiStar color="yellow" /> 4.7{' '}
        </div>
      </NameContainer>
      <CompletionContainer>
        <CompletionText>
          Complete Profile in order to start posting jobs
        </CompletionText>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <LocoProgressBars value={progressValue} />
          <p>{progressValue}%</p>
        </div>
      </CompletionContainer>
      <GeneralButton
        sx={{ width: '100%', paddingX: '10px', borderRadius: '10px' }}
        title="Setup Profile"
      />
    </Wrapper>
  )
}

export default ProfileCard

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.border.timberwolf};
  padding: 1rem;
  border-radius: 10px;
  background: white;
  width: 17rem;
`

const HospitalName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`

const CompletionContainer = styled.div`
  width: 100%;
`

const CompletionText = styled.p`
  font-size: 0.9rem;
  color: #00000099;
  text-align: center;
  padding-bottom: 15px;
`
