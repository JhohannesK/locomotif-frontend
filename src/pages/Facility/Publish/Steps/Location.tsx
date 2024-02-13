import { FormProvider, useForm } from 'react-hook-form'
import { GenericButton, GenericInput } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { ButtonWrapper, Container, FormContainer, Wrapper } from './JobDetails'
import { InputBoxLabels } from '../../../auth/signin/styles'
import styled from 'styled-components'

const Location = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Wrapper style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Location</p>
        <FormProvider {...methods}>
          <FormContainer style={{ marginBottom: '3rem' }}>
            <FormWrapper>
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
            </FormWrapper>
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
          </FormContainer>
        </FormProvider>
      </Wrapper>
    </Container>
  )
}

export default Location

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
