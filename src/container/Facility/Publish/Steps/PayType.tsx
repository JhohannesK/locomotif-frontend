import { FormProvider, useForm } from 'react-hook-form'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CheckedRadioBtn, GenericButton, RadioBtn } from '../../../../_shared'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import React from 'react'
import { colors } from '../../../../colors'
import LocoSelect from '../../../../_shared/components/inputs/LocoSelect'
import {
  handleChange,
  handleSelectChange,
  setStatusCodeToDef,
} from '@/redux/slices/facilitySlice'
import { updateFacilityPost } from '@/redux/slices/apis/facilityThunk'

const PayType = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  const { status_code, publish_form_state: values } = useAppSelector(
    (state) => state.facility
  )

  React.useEffect(() => {
    if (status_code === '000') {
      dispatch(nextPage())
    }

    return () => {
      dispatch(setStatusCodeToDef())
    }
  }, [status_code, dispatch])

  const isFPDisabled = values.payment_type !== 'FIXED'
  const isPRDisabled = values.payment_type !== 'RANGE'

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
                name="payment_type"
                value={values.payment_type}
                onChange={(e) => dispatch(handleChange(e))}
              >
                <FormControlLabel
                  label="Fixed pay"
                  value={'FIXED'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
                <FormControlLabel
                  label="Pay Range"
                  value={'RANGE'}
                  control={
                    <Radio
                      icon={<RadioBtn />}
                      checkedIcon={<CheckedRadioBtn />}
                    />
                  }
                />
              </RadioGroup>
            </div>
            <div className={`${isFPDisabled ? 'opacity-25' : ''}`}>
              <div>Fixed Pay Amount</div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="w-24">
                  <LocoSelect
                    name="payment_currency"
                    value={values?.payment_currency}
                    onChange={(_, newValue) => {
                      dispatch(
                        handleSelectChange({
                          name: 'payment_currency',
                          value: newValue as string,
                        })
                      )
                    }}
                    options={currency}
                    defaultOption="GHS"
                  />
                </div>
                <input
                  className="border border-border-tertiary rounded-lg w-20 pl-1 py-1"
                  type="number"
                  name="payment_fixed_amount"
                  value={Number(values?.payment_fixed_amount)}
                  onChange={(e) => dispatch(handleChange(e))}
                  max={7}
                  disabled={isFPDisabled}
                />
                <div className="w-24">
                  <LocoSelect
                    name="payment_billing_cylce"
                    options={payment_billing_cylce}
                    value={values?.payment_billing_cylce}
                    onChange={(_, newValue) => {
                      dispatch(
                        handleSelectChange({
                          name: 'payment_billing_cylce',
                          value: newValue as string,
                        })
                      )
                    }}
                    defaultOption={payment_billing_cylce[0]}
                  />
                </div>
              </div>
            </div>
            <div className={`${isPRDisabled ? 'opacity-25' : ''}`}>
              <div>Pay Range Amount</div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-24">
                    <LocoSelect
                      name="payment_currency"
                      options={currency}
                      defaultOption="GHS"
                      value={values?.payment_currency}
                      onChange={(_, newValue) => {
                        dispatch(
                          handleSelectChange({
                            name: 'payment_currency',
                            value: newValue as string,
                          })
                        )
                      }}
                    />
                  </div>
                  From
                  <input
                    className="border border-border-tertiary rounded-lg w-20 pl-1 py-1"
                    type="number"
                    name="payment_min_amount"
                    value={Number(values?.payment_min_amount)}
                    onChange={(e) => dispatch(handleChange(e))}
                    max={7}
                    disabled={isPRDisabled}
                  />
                </div>
                <div className="flex items-center gap-2">
                  To
                  <input
                    className="border border-border-tertiary rounded-lg w-20 pl-1 py-1"
                    type="number"
                    name="payment_max_amount"
                    value={Number(values?.payment_max_amount)}
                    onChange={(e) => dispatch(handleChange(e))}
                    max={7}
                    disabled={isPRDisabled}
                  />
                  <div className="w-24">
                    <LocoSelect
                      name=""
                      options={payment_billing_cylce}
                      defaultOption={payment_billing_cylce[0]}
                      value={values?.payment_billing_cylce}
                      onChange={(_, newValue) => {
                        dispatch(
                          handleSelectChange({
                            name: 'payment_billing_cylce',
                            value: newValue as string,
                          })
                        )
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="btn-group">
            <GenericButton
              disabled={!values?.payment_type}
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

export default PayType

const currency = ['GHS', 'USD', 'GBP', 'EUR', 'CAD', 'AUD']

const payment_billing_cylce = ['DAY', 'MONTH', 'WEEK', 'YEAR']
