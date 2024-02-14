import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { ButtonWrapper, Container, FormContainer, Wrapper } from './JobDetails'
import { InputBoxLabels } from '../../../auth/signin/styles'
import {
  CheckedRadioBtn,
  GenericButton,
  GenericInput,
  RadioBtn,
} from '../../../../_shared'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { colors } from '../../../../colors'
import styled from 'styled-components'
import React from 'react'

const ProfessionalRegistration = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  const [value, setValue] = React.useState('no')
  return (
    <Container>
      <Wrapper style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Professional registration
        </p>
        <FormProvider {...methods}>
          <FormContainer>
            <FormWrapper>
              <div>
                <div>
                  <InputBoxLabels>
                    Does the job require current professional registration?
                  </InputBoxLabels>
                  <RadioGroup
                    aria-labelledby="label-for-yes-no"
                    name="radio-buttons-group"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
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
              </div>
              <PreAppStyles disabled={value === 'no'}>
                <InputBoxLabels>
                  Select your pre-application questions
                </InputBoxLabels>
                <RadioGroup
                  aria-labelledby="label-for-yes-no"
                  name="radio-buttons-group"
                  style={{ gap: '1rem' }}
                >
                  <FormControlLabel
                    label={
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span>Do you have a </span>
                        <GenericInput
                          name="qualif"
                          placeholder="Surgeon"
                          disabled={value === 'no'}
                        />
                        <span> qualification or the equivalent?</span>
                      </div>
                    }
                    value={'q'}
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
                    label={
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span>Do you have a </span>
                        <GenericInput
                          name="qualif"
                          placeholder="Surgeon"
                          disabled={value === 'no'}
                        />
                        <span> qualification or the equivalent?</span>
                      </div>
                    }
                    value={'t'}
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
              </PreAppStyles>
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

export default ProfessionalRegistration

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`

const PreAppStyles = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`
