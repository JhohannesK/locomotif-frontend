import { FormProvider, useForm } from 'react-hook-form'
import { ButtonWrapper, Container, FormContainer, Wrapper } from './JobDetails'
import styled from 'styled-components'
import { InputBoxLabels } from '../../../auth/signin/styles'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { InputWrapper, LocoInput } from './ContractDetails'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import React from 'react'

const PayType = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  const [value, setValue] = React.useState('')
  const isFPDisabled = value !== 'FP'
  const isPRDisabled = value !== 'PR'
  return (
    <Container>
      {/* FIXME: fix layout on mobile */}
      <Wrapper style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Pay Type</p>

        <FormProvider {...methods}>
          <FormContainer action="">
            <FormWrapper>
              <div>
                <InputBoxLabels>Select Pay Type</InputBoxLabels>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="FP"
                  name="radio-buttons-group"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <FormControlLabel
                    label="Fixed pay"
                    value={'FP'}
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
                    label="Pay Range"
                    value={'PR'}
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
              <FPStyles disabled={value !== 'FP'}>
                <InputBoxLabels>Fixed Pay Amount</InputBoxLabels>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <InputWrapper>
                    <LocoSelect disabled={isFPDisabled}>
                      <option value="">GHS</option>
                      <option value="">USD</option>
                      <option value="">GBP</option>
                    </LocoSelect>
                  </InputWrapper>
                  <LocoInput type="number" max={7} disabled={isFPDisabled} />/
                  <InputWrapper>
                    <LocoSelect disabled={isFPDisabled}>
                      <option value="Month">Month</option>
                      <option value="Month">Year</option>
                    </LocoSelect>
                  </InputWrapper>
                </div>
              </FPStyles>
              <PRStyles disabled={isPRDisabled}>
                <InputBoxLabels>Pay Range Amount</InputBoxLabels>
                <SelectStyles>
                  <FromDiv>
                    <InputWrapper>
                      <LocoSelect disabled={isPRDisabled}>
                        <option value="">GHS</option>
                        <option value="">USD</option>
                        <option value="">GBP</option>
                      </LocoSelect>
                    </InputWrapper>
                    From
                    <LocoInput type="number" max={7} disabled={isPRDisabled} />
                  </FromDiv>
                  <ToDiv>
                    To
                    <LocoInput type="number" max={7} />/
                    <InputWrapper>
                      <LocoSelect disabled={isPRDisabled}>
                        <option value="Month">Month</option>
                        <option value="Month">Year</option>
                      </LocoSelect>
                    </InputWrapper>
                  </ToDiv>
                </SelectStyles>
              </PRStyles>
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

export default PayType

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
// `

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const FPStyles = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`

const PRStyles = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`

const LocoSelect = styled.select`
  border: 1px solid ${colors.border.timberwolf};
  background: rgba(217, 217, 217, 0.7);
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 78px;

  &:focus {
    outline: none;
  }
`

const SelectStyles = styled.div`
  @media screen and (max-width: 582px) {
    flex-direction: column;
  }
  display: flex;
  gap: 1rem;
`

const FromDiv = styled.div`
  display: flex;
  gap: 1rem;
`

const ToDiv = styled.div`
  display: flex;
  gap: 1rem;
`
