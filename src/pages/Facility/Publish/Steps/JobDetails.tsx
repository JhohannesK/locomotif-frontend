import { FormProvider, useForm } from 'react-hook-form'
import {
  CheckedRadioBtn,
  GenericButton,
  GenericInput,
  Input,
  RadioBtn,
} from '../../../../_shared'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook'
import { nextPage } from '../../../../redux/slices/appSlice'
import { colors } from '../../../../colors'
import { createFacilityPost } from '../../../../redux/slices/apis/facilityThunk'
import {
  handleChange,
  setStatusCodeToDef,
} from '../../../../redux/slices/facilitySlice'
import { useEffect } from 'react'

const JobDetails = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  const { status_code: statusCode, publish_form_state: values } =
    useAppSelector((state) => state.facility)
  console.log('🚀 ~ JobDetails ~ values:', values)

  useEffect(() => {
    if (statusCode === '000') {
      dispatch(nextPage())
    }

    return () => {
      dispatch(setStatusCodeToDef())
    }
  }, [statusCode, dispatch])

  return (
    <div className="border details-container">
      <div className="details-container__wrapper" style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Job Details</p>
        <FormProvider {...methods}>
          <form action="" className="form-control">
            <div>
              <div>Job title</div>
              <Input
                value={values?.title}
                name="title"
                onChange={(e) => dispatch(handleChange(e))}
                placeholder="What's the job title"
              />
            </div>
            <div>
              <div>Job Description</div>
              <GenericInput
                type="multiline-input"
                name="description"
                value={values?.description}
                onChange={(e) => dispatch(handleChange(e))}
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
                name="advertisement_reason"
                value={values.advertisement_reason}
                onChange={(e) => dispatch(handleChange(e))}
              >
                <FormControlLabel
                  label="Replacing someone who's leaving"
                  value={'REPLACEMENT'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
                <FormControlLabel
                  label="This is a new job"
                  value={'NEW_ROLE'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
                <FormControlLabel
                  label="Temporary Position"
                  value={'TEMPORARY'}
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
                  dispatch(
                    createFacilityPost({
                      publish_form_state: values,
                      status_code: '001',
                    })
                  )
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
