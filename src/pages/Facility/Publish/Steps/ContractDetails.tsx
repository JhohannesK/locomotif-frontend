import { FormProvider, useForm } from 'react-hook-form'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import React from 'react'
import { FacilityType, IState } from '../../../../redux/slices/_types'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import { formData } from '../../../../utils/constants'

const ContractDetails = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()

  const getFormValues = (): FacilityType => {
    const storedValue = loadFromLocalStorage('FACILITY_FORM_DATA') as IState
    if (!storedValue) return formData
    return storedValue.publish_form_state as FacilityType
  }

  const [values, setValue] = React.useState<FacilityType>(getFormValues)
  console.log('🚀 ~ JobDetails ~ values:', values)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setValue({ ...values, [name]: value })
  }

  return (
    <div className="border details-container">
      <div className="details-container__wrapper">
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Contract Details
        </p>
        <FormProvider {...methods}>
          <form className="form-control">
            <div>
              <div>What type of Contract is it?</div>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Replacing someone who's leaving"
                name="contract_type"
                value={values.contract_type}
                onChange={handleChange}
              >
                <FormControlLabel
                  label="Permanent"
                  value={'PERMANENT'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
                <FormControlLabel
                  label="Locum"
                  value={'LOCUM'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
              </RadioGroup>
            </div>

            <div
              className={`${values.contract_type !== 'LOCUM' ? 'opacity-25' : ''} "flex flex-col gap-3"`}
            >
              {/* TODO: Paul said I should use the ISO format for the duration:: day.js has duration api */}
              <div>
                What's the contract duration? (Only for temporary contracts)
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="flex gap-2 items-center">
                  <div className="bg-background-secondary rounded-lg p-2">
                    Months
                  </div>
                  <input
                    className="border border-border-tertiary rounded-lg w-16 pl-1 py-1"
                    type="number"
                    max={7}
                    disabled={values.contract_type !== 'LOCUM'}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-background-secondary rounded-lg p-2">
                    Days
                  </div>
                  <input
                    className="border border-border-tertiary rounded-lg w-16 pl-1 py-1"
                    type="number"
                    max={31}
                    maxLength={2}
                    disabled={values.contract_type !== 'LOCUM'}
                  />
                </div>
              </div>
            </div>

            <div>
              <div>What's the working pattern?</div>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Full time"
                name="contract_working_pattern"
                value={values.contract_working_pattern}
                onChange={handleChange}
              >
                <FormControlLabel
                  label={
                    <div>
                      Full time
                      <p style={{ fontSize: '0.8rem', color: 'gray' }}>
                        Will work in the facility with fixed full hours and
                        schedule.
                      </p>
                    </div>
                  }
                  value={'FULL_TIME'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
                <FormControlLabel
                  label={
                    <div>
                      Part time
                      <p style={{ fontSize: '0.8rem', color: 'gray' }}>
                        Will work in the facility for shorter hours to allow the
                        staff to work elsewhere
                      </p>
                    </div>
                  }
                  value={'PART_TIME'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
                <FormControlLabel
                  label={
                    <div>
                      Flexible hours
                      <p style={{ fontSize: '0.8rem', color: 'gray' }}>
                        Will be called to work when the need arises
                      </p>
                    </div>
                  }
                  value={'FLEXIBLE_HOURS'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
              </RadioGroup>
            </div>
          </form>
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
          </div>
        </FormProvider>
      </div>
    </div>
  )
}

export default ContractDetails
