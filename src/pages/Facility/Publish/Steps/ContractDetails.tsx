import { FormProvider, useForm } from 'react-hook-form'
import { ButtonWrapper, Container, FormContainer, Wrapper } from './JobDetails'
import { InputBoxLabels } from '../../../auth/signin/styles'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { colors } from '../../../../colors'

const ContractDetails = () => {
  const methods = useForm()
  return (
    <Container>
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Contract Details
        </p>
        <FormProvider {...methods}>
          <FormContainer action="">
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

            <div>
              <InputBoxLabels>
                What's the contract duration? (Only for temporary contracts)
              </InputBoxLabels>
              {/* <NumberInput
                aria-label="Demo number input"
                placeholder="Type a number…"
                value={value}
                onChange={(event, val) => setValue(val)}
              /> */}
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
              />
              <GenericButton sx={{ width: '8rem' }} title="Next" />
            </ButtonWrapper>
          </FormContainer>
        </FormProvider>
      </Wrapper>
    </Container>
  )
}

export default ContractDetails
