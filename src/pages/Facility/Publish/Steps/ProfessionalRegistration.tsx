import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import {
  CheckedRadioBtn,
  GenericButton,
  Input,
  RadioBtn,
} from '../../../../_shared'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import { colors } from '../../../../colors'
import React from 'react'
import { handleChange, setStatusCodeToDef } from '@/redux/slices/facilitySlice'
import { updateFacilityPost } from '@/redux/slices/apis/facilityThunk'

const ProfessionalRegistration = () => {
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

  return (
    <div className="border details-container">
      <div className="details-container__wrapper">
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Professional registration
        </p>
        <FormProvider {...methods}>
          <form className="form-control">
            <div className="flex flex-col gap-7">
              <div>
                <div>
                  Does the job require current professional registration?
                </div>
                <RadioGroup
                  aria-labelledby="label-for-yes-no"
                  name="pr_required"
                  onChange={(e) => dispatch(handleChange(e))}
                  value={values.pr_required}
                >
                  <FormControlLabel
                    label="Yes"
                    value={'YES'}
                    control={
                      <Radio
                        icon={<RadioBtn />}
                        checkedIcon={<CheckedRadioBtn />}
                      />
                    }
                  />
                  <FormControlLabel
                    label="No"
                    value={'NO'}
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
                className={`${values?.pr_required === 'YES' ? 'block' : 'hidden'}`}
              >
                <div>Select your pre-application questions</div>
                {/* TODO: Confirm what the backend takes */}
                {/* FIXME: Make user select a radio btn before abling the input */}
                <RadioGroup
                  aria-labelledby="label-for-yes-no"
                  name="radio-buttons-group"
                  style={{ gap: '1rem' }}
                >
                  <FormControlLabel
                    label={
                      <div className="flex items-center gap-2">
                        <div>Do you have a </div>
                        <Input
                          value={values.pre_application_questions}
                          onChange={(e) => dispatch(handleChange(e))}
                          name=""
                          placeholder=""
                        />
                        <div> qualification or the equivalent?</div>
                      </div>
                    }
                    value={'q'}
                    control={
                      <Radio
                        icon={<RadioBtn />}
                        checkedIcon={<CheckedRadioBtn />}
                      />
                    }
                  />
                  <FormControlLabel
                    label={
                      <div className="flex items-center gap-2">
                        <div>Do you have a </div>
                        <Input name="" placeholder="Surgeon" />
                        <div> qualification or the equivalent?</div>
                      </div>
                    }
                    value={'t'}
                    control={
                      <Radio
                        icon={<RadioBtn />}
                        checkedIcon={<CheckedRadioBtn />}
                      />
                    }
                  />
                </RadioGroup>
              </div>
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
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default ProfessionalRegistration

// const FormWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   margin-top: 2rem;
// `

// const PreAppStyles = styled.div<{ disabled: boolean }>`
//   display: flex;
//   flex-direction: column;
//   gap: 0.2rem;
//   opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
// `
