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
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import React from 'react'
import { FacilityType, IState } from '../../../../redux/slices/_types'
import { formData } from '../../../../utils/constants'
import { createFacilityPost } from '../../../../redux/slices/apis/facilityThunk'

const JobDetails = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()

  const getFormValues = (): FacilityType => {
    const storedValue = loadFromLocalStorage('FACILITY_FORM_DATA') as IState
    if (!storedValue) return formData
    return storedValue.publish_form_state as FacilityType
  }

  const [values, setValue] = React.useState<FacilityType>(getFormValues)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setValue({ ...values, [name]: value })
  }

  return (
    <div className="border details-container">
      <div className="details-container__wrapper" style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Job Details</p>
        <FormProvider {...methods}>
          <form action="" className="form-control">
            <div>
              <div>Job title</div>
              <Input
                value={values.title}
                name="title"
                onChange={handleChange}
                placeholder="What's the job title"
              />
            </div>
            <div>
              <div>Job Description</div>
              <GenericInput
                type="multiline-input"
                name="description"
                value={values.description}
                onChange={handleChange}
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
                onChange={handleChange}
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
                  dispatch(nextPage())
                  dispatch(createFacilityPost({ publish_form_state: values }))
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
