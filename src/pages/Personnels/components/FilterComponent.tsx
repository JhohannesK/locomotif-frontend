import { GenericButton } from '@/_shared'
import LocoSlider from '@/_shared/components/LocoSlider'
import { Checkbox } from '@/_shared/components/ui/checkbox'

const FilterComponent = () => {
  return (
    <div className="flex flex-col gap-5 justify-between min-h-56 w-full border bg-white rounded-xl border-border-tertiary shadow-lg">
      <div className="p-5">
        <h1 className="text-2xl font-bold text-center">Filter</h1>
        <form className="flex flex-col gap-10">
          <div className="">
            <h2 className="text-lg font-bold pb-2">Location</h2>
            <input
              type="text"
              placeholder="Search for a location"
              className="w-full border border-border-tertiary p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Job Type</h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="opacity-70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Full time offer
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="opacity-70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Part time offer
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Shift Type</h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="opacity-70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Morning
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="opacity-70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Afternoon
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Speciality</h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="opacity-70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cardiologist
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="opacity-70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Nursing
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="opacity-70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Nursing
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Expected Salary/Month</h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="opacity-70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                less than $1000
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="opacity-70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                $1000 - $2000
              </label>
            </div>

            <div>
              <h2>Range Salary</h2>
              <LocoSlider />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <GenericButton title="Apply Filter" />
            <GenericButton
              title="Clear Filter"
              className="bg-white border border-border-tertiary text-primary"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default FilterComponent
