import { FormProvider, useForm } from 'react-hook-form'
import { ButtonWrapper, Container, FormContainer, Wrapper } from './JobDetails'
import {
  CheckedRadioBtn,
  GenericButton,
  GenericInput,
  RadioBtn,
} from '../../../../_shared'
import { colors } from '../../../../colors'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { InputBoxLabels } from '../../../auth/signin/styles'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

const RecruiterInformation = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Wrapper style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Recruiter Information
        </p>
        <FormProvider {...methods}>
          <FormContainer style={{ marginBottom: '3rem' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div>
                <div>
                  <InputBoxLabels>
                    Are you teh recruiter for this job?
                  </InputBoxLabels>
                  <RadioGroup
                    aria-labelledby="label-for-yes-no"
                    defaultValue="yes"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      label="Yes"
                      value={'yes'}
                      control={
                        <Radio
                          icon={<RadioBtn height="1.5rem" width="1.5rem" />}
                          checkedIcon={
                            <CheckedRadioBtn
                              outerRadius="1.1rem"
                              innerRadius=".5rem"
                            />
                          }
                        />
                      }
                    />
                    <FormControlLabel
                      label="No"
                      value={'no'}
                      control={
                        <Radio
                          icon={<RadioBtn height="1.5rem" width="1.5rem" />}
                          checkedIcon={
                            <CheckedRadioBtn
                              outerRadius="1.1rem"
                              innerRadius=".5rem"
                            />
                          }
                        />
                      }
                    />
                  </RadioGroup>
                </div>
                <InputBoxLabels>Name</InputBoxLabels>
                <GenericInput
                  name="name"
                  placeholder="Name"
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

export default RecruiterInformation
