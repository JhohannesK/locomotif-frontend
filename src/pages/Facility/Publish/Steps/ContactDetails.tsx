import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { ButtonWrapper, Container, FormContainer, Wrapper } from './JobDetails'
import { InputBoxLabels } from '../../../auth/signin/styles'
import { GenericButton, GenericInput } from '../../../../_shared'
import { colors } from '../../../../colors'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'

const ContactDetails = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Wrapper style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Contact Details
        </p>
        <FormProvider {...methods}>
          <FormContainer style={{ marginBottom: '3rem' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div>
                <InputBoxLabels>Name</InputBoxLabels>
                <GenericInput
                  name="name"
                  placeholder="Name"
                  sx={{ width: '100%' }}
                />
              </div>
              <div>
                <InputBoxLabels>Job Title(Optional)</InputBoxLabels>
                <GenericInput
                  name="title"
                  placeholder="Your job title"
                  sx={{ width: '100%' }}
                />
              </div>
              <div>
                <InputBoxLabels>Email Address</InputBoxLabels>
                <GenericInput
                  placeholder="someone@gmail.com"
                  name="email"
                  sx={{ width: '100%' }}
                  type="email"
                />
              </div>
              <div>
                <InputBoxLabels>Telephone number</InputBoxLabels>
                <GenericInput
                  name="tel"
                  placeholder="0342342343"
                  type="tel"
                  sx={{ width: '100%' }}
                />
              </div>
            </div>
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

export default ContactDetails
