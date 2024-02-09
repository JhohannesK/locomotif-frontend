import { FormProvider, useForm } from 'react-hook-form'
import { ButtonWrapper, Container, Wrapper } from './JobDetails'
import styled from 'styled-components'
import { InputBoxLabels } from '../../../auth/signin/styles'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { InputWrapper, LocoInput } from './ContractDetails'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'

const PayType = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  return (
    <Container>
      {/* FIXME: fix layout on mobile */}
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Pay Type</p>

        <FormProvider {...methods}>
          <FormContainer action="">
            <div>
              <InputBoxLabels>Select Pay Type</InputBoxLabels>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Fixed pay"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  label="Fixed pay"
                  value={'Fixed pay'}
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
                  value={'Pay Range'}
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
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <InputBoxLabels>Fixed Pay Amount</InputBoxLabels>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <InputWrapper>
                  <LocoSelect>
                    <option value="">GHS</option>
                    <option value="">USD</option>
                    <option value="">GBP</option>
                  </LocoSelect>
                </InputWrapper>
                <LocoInput type="number" max={7} />/
                <InputWrapper>
                  <LocoSelect>
                    <option value="Month">Month</option>
                    <option value="Month">Year</option>
                  </LocoSelect>
                </InputWrapper>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <InputBoxLabels>Pay Range Amount</InputBoxLabels>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <InputWrapper>
                  <LocoSelect>
                    <option value="">GHS</option>
                    <option value="">USD</option>
                    <option value="">GBP</option>
                  </LocoSelect>
                </InputWrapper>
                From
                <LocoInput type="number" max={7} />
                To
                <LocoInput type="number" max={7} />/
                <InputWrapper>
                  <LocoSelect>
                    <option value="Month">Month</option>
                    <option value="Month">Year</option>
                  </LocoSelect>
                </InputWrapper>
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

export default PayType

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
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
