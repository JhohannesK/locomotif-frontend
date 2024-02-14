import { FormProvider, useForm } from 'react-hook-form'
import { ButtonWrapper, Container, Wrapper } from './JobDetails'
import { InputBoxLabels } from '../../../auth/signin/styles'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import styled from 'styled-components'

const ContractDetails = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Wrapper style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Contract Details
        </p>
        <FormProvider {...methods}>
          <FormContainer>
            <FormWrapper>
              <div>
                <InputBoxLabels>What type of Contract is it?</InputBoxLabels>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Replacing someone who's leaving"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    label="Replacing someone who's leaving"
                    value={"Replacing someone who's leaving"}
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
                    label="This is a new job"
                    value={'This is a new job'}
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
                    label="Temporary Position"
                    value={'Temporary Position'}
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

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <InputBoxLabels>
                  What's the contract duration? (Only for temporary contracts)
                </InputBoxLabels>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <InputWrapper>
                    <InputLabel>Months</InputLabel>
                    <LocoInput type="number" max={7} />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel>Days</InputLabel>
                    <LocoInput type="number" max={31} maxLength={2} />
                  </InputWrapper>
                </div>
              </div>

              <div>
                <InputBoxLabels>What's the working patter?</InputBoxLabels>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Full time"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    label="Full time"
                    value={'Full time'}
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
                    label="Part time"
                    value={'Part time'}
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
                    label="Flexible hours"
                    value={'Flexible hours'}
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

export default ContractDetails

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 4rem;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
`

export const InputLabel = styled.p`
  /* color: ${colors.text.platinum}; */
  background: rgba(217, 217, 217, 0.7);
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
`
export const LocoInput = styled.input`
  border: 1px solid ${colors.border.timberwolf};
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 68px;

  &:focus {
    outline: none;
  }
`
