import { FormProvider, useForm } from 'react-hook-form'
import {
  CheckedRadioBtn,
  GenericButton,
  GenericInput,
  Input,
  RadioBtn,
} from '../../../../_shared'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage } from '../../../../redux/slices/appSlice'
import { colors } from '../../../../colors'

const JobDetails = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()

  return (
    <div className="border details-container">
      <div className="details-container__wrapper" style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Job Details</p>
        <FormProvider {...methods}>
          <form action="" className="form-control">
            <div>
              <div>Job title</div>
              <Input name="jobTitle" placeholder="What's the job title" />
            </div>
            <div>
              <div>Job Description</div>
              <GenericInput
                type="multiline-input"
                name="jobTitle_desc"
                label=""
                placeholder="200 characters allowed"
                rows={6}
                sx={{ borderRadius: '0.5rem' }}
              />
            </div>
            <div>
              <div>Why are you advertising this role?</div>
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
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
                <FormControlLabel
                  label="This is a new job"
                  value={'This is a new job'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
                <FormControlLabel
                  label="Temporary Position"
                  value={'Temporary Position'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
              </RadioGroup>
            </div>
            <div className="btn-group">
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
              <GenericButton
                type="button"
                sx={{ width: '8rem' }}
                title="Next"
                onClick={() => {
                  dispatch(nextPage())
                }}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default JobDetails
