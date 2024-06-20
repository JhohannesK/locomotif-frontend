import { CheckedRadioBtn, RadioBtn } from '@/_shared'
import { Checkbox } from '@/_shared/components/ui/checkbox'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'

const FilterBy = () => {
  const methods = useForm()
  return (
    <form className="grid grid-cols-5 border-t">
      <FormProvider {...methods}>
        <div className="flex flex-col gap-2 pt-5">
          <h2 className="text-primary font-bold">Contract type</h2>
          <RadioGroup
            aria-labelledby="radio-button-for-contract-type"
            defaultValue="ALL"
            name="contract_type"
            // value={values?.advertisement_reason}
            // onChange={(e) => dispatch(handleChange(e))}
          >
            <FormControlLabel
              label="All"
              value={'ALL'}
              control={
                <Radio
                  icon={<RadioBtn className="h-[1.5rem] w-[1.5rem]" />}
                  checkedIcon={
                    <CheckedRadioBtn outerClassName="h-[1.5rem] w-[1.5rem]" />
                  }
                />
              }
            />
            <FormControlLabel
              label="Full time"
              value={'FULL_TIME'}
              control={
                <Radio
                  icon={<RadioBtn className="h-[1.5rem] w-[1.5rem]" />}
                  checkedIcon={
                    <CheckedRadioBtn outerClassName="h-[1.5rem] w-[1.5rem]" />
                  }
                />
              }
            />
            <FormControlLabel
              label="Part time"
              value={'PART_TIME'}
              control={
                <Radio
                  icon={<RadioBtn className="h-[1.5rem] w-[1.5rem]" />}
                  checkedIcon={
                    <CheckedRadioBtn outerClassName="h-[1.5rem] w-[1.5rem]" />
                  }
                />
              }
            />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-2 pt-5">
          <h2 className="text-primary font-bold">Contract Status</h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-center space-x-2">
              <Checkbox id="all" />
              <label
                htmlFor="all"
                className=" leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                All
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pending" />
              <label
                htmlFor="pending"
                className=" leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Pending
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="active" />
              <label
                htmlFor="active"
                className=" leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Active
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ended" />
              <label
                htmlFor="ended"
                className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ended
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="paused" />
              <label
                htmlFor="paused"
                className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Paused
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5">
          <h2 className="text-primary font-bold">Contract type</h2>
          <RadioGroup
            aria-labelledby="radio-button-for-contract-type"
            defaultValue="ALL"
            name="contract_type"
            // value={values?.advertisement_reason}
            // onChange={(e) => dispatch(handleChange(e))}
          >
            <FormControlLabel
              label="All"
              value={'ALL'}
              control={
                <Radio
                  icon={<RadioBtn className="h-[1.5rem] w-[1.5rem]" />}
                  checkedIcon={
                    <CheckedRadioBtn outerClassName="h-[1.5rem] w-[1.5rem]" />
                  }
                />
              }
            />
            <FormControlLabel
              label="Full time"
              value={'FULL_TIME'}
              control={
                <Radio
                  icon={<RadioBtn className="h-[1.5rem] w-[1.5rem]" />}
                  checkedIcon={
                    <CheckedRadioBtn outerClassName="h-[1.5rem] w-[1.5rem]" />
                  }
                />
              }
            />
            <FormControlLabel
              label="Part time"
              value={'PART_TIME'}
              control={
                <Radio
                  icon={<RadioBtn className="h-[1.5rem] w-[1.5rem]" />}
                  checkedIcon={
                    <CheckedRadioBtn outerClassName="h-[1.5rem] w-[1.5rem]" />
                  }
                />
              }
            />
          </RadioGroup>
        </div>
      </FormProvider>
    </form>
  )
}

export default FilterBy
