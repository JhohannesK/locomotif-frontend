import styled from 'styled-components'
import { colors } from '../../../../colors'
import { FormProvider, useForm } from 'react-hook-form'
import {
  CheckedRadioBtn,
  GenericButton,
  GenericInput,
  RadioBtn,
} from '../../../../_shared'
import { InputBoxLabels } from '../../../auth/signin/styles'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage } from '../../../../redux/slices/appSlice'

const JobDetails = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Wrapper style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Job Details</p>
        <FormProvider {...methods}>
          <FormContainer action="">
            <div>
              <InputBoxLabels>Job title</InputBoxLabels>
              <GenericInput
                name="Jobtitle"
                label=""
                placeholder="Surgeon"
                sx={{ borderRadius: '0.5rem', width: '100%' }}
              />
            </div>
            <div>
              <InputBoxLabels>Job Description</InputBoxLabels>
              <GenericInput
                type="multiline-input"
                name="jobTitle_desc"
                label=""
                placeholder="200 characters allowed"
                rows={8}
                sx={{ borderRadius: '0.5rem' }}
              />
            </div>
            <div>
              <InputBoxLabels>
                Why are you advertising this role?
              </InputBoxLabels>
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
            <ButtonWrapper>
              {/* <GenericButton
                type="button"
                sx={{
                  width: '8rem',
                  bgcolor: 'white',
                  border: `1px solid ${colors.text.pineGreen}`,
                  color: `${colors.text.pineGreen}`,
                }}
                title="Previous"
/> */}
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

export default JobDetails

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${colors.border.timberwolf};
  border-radius: 0.5rem;
  min-width: 100%;
  box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
  background-color: ${colors.background.white};
  height: calc(100vh - 250px);
  overflow-y: auto;
  max-height: 90rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  /* height: 100%; */
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  justify-content: space-between;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  justify-content: flex-end;
`
