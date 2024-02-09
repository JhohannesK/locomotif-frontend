import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { ButtonWrapper, Container, Wrapper } from './JobDetails'
import LocoDropdown from '../../../../_shared/components/Dropdown'

const medicalList = [
  'Senior consultant',
  'Specialist',
  'Medical officer',
  'House officer',
  'Lab technician',
  'Nurse',
]

const AlliedHealthList = [
  'Dieticians',
  'Occupational therapist',
  'Physiotherapist',
  'Radiographer',
  'Speech therapist',
  'Pharmacist',
]

const StaffInformation = () => {
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Staff Information
        </p>
        <LocoDropdown items={medicalList} title="Medical" />
        <LocoDropdown
          items={AlliedHealthList}
          title="Allied and Health Professionals"
        />
        <ButtonWrapper>
          <GenericButton
            type="button"
            sx={{
              width: '8rem',
              bgcolor: 'white',
              border: `1px solid ${colors.text.pineGreen}`,
              color: `${colors.text.pineGreen}`,
            }}
            title="Previous"
            onClick={() => {
              dispatch(prevPage())
            }}
          />
          <GenericButton
            type="button"
            sx={{ width: '8rem' }}
            title="Next"
            onClick={() => {
              dispatch(nextPage())
            }}
          />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}

export default StaffInformation
