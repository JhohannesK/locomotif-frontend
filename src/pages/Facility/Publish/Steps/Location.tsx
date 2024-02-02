import { FormProvider, useForm } from 'react-hook-form'
import { GenericButton, GenericInput } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { setActiveJobPublishingStep } from '../../../../redux/slices/appSlice'
import { ButtonWrapper, Container, FormContainer, Wrapper } from './JobDetails'
import { InputBoxLabels } from '../../../auth/signin/styles'

const Location = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Location</p>
        <FormProvider {...methods}>
          <FormContainer style={{ marginBottom: '3rem' }}>
            <div>
              <InputBoxLabels>Address line 1</InputBoxLabels>
              <GenericInput
                name="line-1"
                placeholder="Address 1"
                sx={{ width: '100%' }}
              />
            </div>
            <div>
              <InputBoxLabels>Address line 2(optional)</InputBoxLabels>
              <GenericInput
                name="line-1"
                placeholder="Address 1"
                sx={{ width: '100%' }}
              />
            </div>
            <div>
              <InputBoxLabels>Town or city Address</InputBoxLabels>
              <GenericInput
                name="line-1"
                placeholder="Address 1"
                sx={{ width: '100%' }}
              />
            </div>
            <div>
              <InputBoxLabels>Region Address (option)</InputBoxLabels>
              <GenericInput
                name="line-1"
                placeholder="Address 1"
                sx={{ width: '100%' }}
              />
            </div>
            <div>
              <InputBoxLabels>Digital Address</InputBoxLabels>
              <GenericInput
                name="line-1"
                placeholder="Address 1"
                sx={{ width: '100%' }}
              />
            </div>
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
              dispatch(
                setActiveJobPublishingStep({ activeJobPublishingStep: 2 })
              )
            }}
          />
          <GenericButton
            type="button"
            sx={{ width: '8rem' }}
            title="Next"
            onClick={() => {
              dispatch(
                setActiveJobPublishingStep({ activeJobPublishingStep: 4 })
              )
            }}
          />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}

export default Location
