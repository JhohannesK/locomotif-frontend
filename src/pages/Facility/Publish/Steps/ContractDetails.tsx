import { FormProvider, useForm } from 'react-hook-form'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import React from 'react'

const ContractDetails = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  const [value, setValue] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
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
                name="radio-buttons-group"
                value={value}
                onChange={handleChange}
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

            <div
              className={`${value !== 'Temporary Position' ? 'opacity-25' : ''} "flex flex-col gap-3"`}
            >
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
                    disabled={value !== 'Temporary Position'}
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
                    disabled={value !== 'Temporary Position'}
                  />
                </div>
              </div>
            </div>

            <div>
              <div>What's the working pattern?</div>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Full time"
                name="radio-buttons-group"
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
                  value={'Full time'}
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
                  value={'Part time'}
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
                  value={'Flexible hours'}
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
