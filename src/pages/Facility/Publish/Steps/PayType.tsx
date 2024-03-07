import { FormProvider, useForm } from 'react-hook-form'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import React from 'react'
import { colors } from '../../../../colors'
import LocoSelect from '../../../../_shared/components/inputs/LocoSelect'

const PayType = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  const [value, setValue] = React.useState('')
  const isFPDisabled = value !== 'FP'
  const isPRDisabled = value !== 'PR'
  return (
    <div className="border details-container">
      {/* FIXME: fix layout on mobile */}
      <div className="details-container__wrapper" style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Pay Type</p>

        <FormProvider {...methods}>
          <form className="form-control">
            <div>
              <div>Select Pay Type</div>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="FP"
                name="radio-buttons-group"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <FormControlLabel
                  label="Fixed pay"
                  value={'FP'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
                <FormControlLabel
                  label="Pay Range"
                  value={'PR'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
              </RadioGroup>
            </div>
            <div className={`${value !== 'FP' ? 'opacity-25' : ''}`}>
              <div>Fixed Pay Amount</div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="w-24">
                  <LocoSelect name="" options={currency} defaultOption="GHS" />
                </div>
                <input
                  className="border border-border-tertiary rounded-lg w-20 pl-1 py-1"
                  type="number"
                  max={7}
                  disabled={isFPDisabled}
                />
                <div className="w-24">
                  <LocoSelect
                    name=""
                    options={currencyType}
                    defaultOption={currencyType[0]}
                  />
                </div>
              </div>
            </div>
            <div className={`${value !== 'PR' ? 'opacity-25' : ''}`}>
              <div>Pay Range Amount</div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-24">
                    <LocoSelect
                      name=""
                      options={currency}
                      defaultOption="GHS"
                    />
                  </div>
                  From
                  <input
                    className="border border-border-tertiary rounded-lg w-20 pl-1 py-1"
                    type="number"
                    max={7}
                    disabled={isPRDisabled}
                  />
                </div>
                <div className="flex items-center gap-2">
                  To
                  <input
                    className="border border-border-tertiary rounded-lg w-20 pl-1 py-1"
                    type="number"
                    max={7}
                    disabled={isPRDisabled}
                  />
                  <div className="w-24">
                    <LocoSelect
                      name=""
                      options={currencyType}
                      defaultOption={currencyType[0]}
                    />
                  </div>
                </div>
              </div>
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

export default PayType

const currency = ['GHS', 'USD', 'GBP', 'EUR', 'CAD', 'AUD']

const currencyType = ['Year', 'Month', 'Week', 'Day', 'Hour', 'Shift']
