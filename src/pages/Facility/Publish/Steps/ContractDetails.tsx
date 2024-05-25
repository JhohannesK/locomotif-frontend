import { FormProvider, useForm } from 'react-hook-form'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import React from 'react'
import { formatISODuration, getMonth } from 'date-fns'
import { updateFacilityPost } from '@/redux/slices/apis/facilityThunk'
import {
  handleChange,
  handleSelectChange,
  setStatusCodeToDef,
} from '@/redux/slices/facilitySlice'

const ContractDetails = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  const { status_code: statusCode, publish_form_state: values } =
    useAppSelector((state) => state.facility)

  const [month, setMonth] = React.useState<number>(6)
  const [day, setDay] = React.useState<number>(0)

  React.useEffect(() => {
    if (statusCode === '000') {
      dispatch(nextPage())
    }

    return () => {
      dispatch(setStatusCodeToDef())
    }
  }, [statusCode, dispatch])

  React.useEffect(() => {
    const duration = formatISODuration({ months: month, days: day })
    console.log('🚀 ~ React.useEffect ~ duration:', duration)
    // setValue({ ...values, contract_duration: duration })
    dispatch(handleSelectChange({ name: 'contract_duration', value: duration }))
    // TODO: Convert duration to months and days
    const aa = getMonth(duration)
    console.log('🚀 ~ React.useEffect ~ aa:', aa)

    return () => {}
  }, [month, day, dispatch])

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
                value={values?.contract_type}
                onChange={(e) => dispatch(handleChange(e))}
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
              <div>
                What's the contract duration? (Only for temporary contracts)
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="flex gap-2 items-center">
                  <input
                    value={month}
                    className="border border-border-tertiary rounded-lg w-16 pl-1 py-1"
                    onChange={(e) => setMonth(parseInt(e.target.value))}
                    type="number"
                    max={7}
                    disabled={values?.contract_type !== 'LOCUM'}
                  />
                  <div className="bg-background-secondary rounded-lg p-2">
                    Month(s)
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    className="border border-border-tertiary rounded-lg w-16 pl-1 py-1"
                    type="number"
                    value={day}
                    onChange={(e) => setDay(parseInt(e.target.value))}
                    max={31}
                    maxLength={2}
                    disabled={values?.contract_type !== 'LOCUM'}
                  />
                  <div className="bg-background-secondary rounded-lg p-2">
                    Day(s)
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>What's the working pattern?</div>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Full time"
                name="contract_working_pattern"
                value={values?.contract_working_pattern ?? ''}
                onChange={(e) => dispatch(handleChange(e))}
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
              disabled={
                !values?.contract_type || !values?.contract_working_pattern
              }
              title="Next"
              onClick={() => {
                dispatch(
                  updateFacilityPost({
                    publish_form_state: values,
                    status_code: '001',
                  })
                )
              }}
            />
          </div>
        </FormProvider>
      </div>
    </div>
  )
}

export default ContractDetails
