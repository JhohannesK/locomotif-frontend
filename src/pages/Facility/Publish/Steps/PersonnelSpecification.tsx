import { FormProvider, useForm } from 'react-hook-form'
import { GenericButton, GenericInput } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { ButtonWrapper, Container, FormContainer, Wrapper } from './JobDetails'
import { InputBoxLabels } from '../../../auth/signin/styles'

const PersonnelSpecification = () => {
  const dispatch = useAppDispatch()
  const methods = useForm()
  return (
    <Container>
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Personnel Specification
        </p>
        <FormProvider {...methods}>
          <FormContainer action="">
            <div>
              <InputBoxLabels>Enter Job Qualification</InputBoxLabels>
              <p style={{ fontSize: '14px' }}>
                list your essential criteria for the job qualification.
              </p>
              <GenericInput
                type="multiline-input"
                name="Job title"
                label=""
                placeholder="200 characters allowed"
                rows={8}
                sx={{ borderRadius: '0.5rem' }}
              />
            </div>
            <div>
              <InputBoxLabels>Enter Addition Needed</InputBoxLabels>
              {/* <p style={{ fontSize: '14px' }}>
                list your essential criteria for the job qualification.
              </p> */}
              <GenericInput
                type="multiline-input"
                name="Job title"
                label=""
                placeholder="200 characters allowed"
                rows={8}
                sx={{ borderRadius: '0.5rem' }}
              />
            </div>
            {/* TODO:Add supporting document later */}
          </FormContainer>
        </FormProvider>
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

export default PersonnelSpecification
