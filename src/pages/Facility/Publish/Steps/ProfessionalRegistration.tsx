import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { ButtonWrapper, Container, FormContainer, Wrapper } from './JobDetails'
import { InputBoxLabels } from '../../../auth/signin/styles'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { colors } from '../../../../colors'

const ProfessionalRegistration = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Wrapper>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Proessional registration
        </p>
        <FormProvider {...methods}>
          <FormContainer>
            <div>
              <div>
                <InputBoxLabels>
                  Does the job require current professional registration?
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

export default ProfessionalRegistration
