import Radiobtn from '../../../_shared/components/Radiobtn'
import GeneralButton from '../../../_shared/components/button/Button'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook'
import { CheckedRadioBtn } from '../../../_shared'
import { moveToPage } from '../../../redux/slices/appSlice'

const steps = [
  'Job Details',
  'Staff information',
  'Contract Details',
  'Pay type',
  'Location',
  'Personel Specification',
  'Professional Registration',
  'Recruiter Information',
  'Preview Posting',
]

const JobPublishingSteps = () => {
  const activeSidebar = useAppSelector(
    (state) => state.app.activeJobPublishingStep
  )
  const dispatch = useAppDispatch()

  const onHandleClick = (index: number) => {
    dispatch(moveToPage({ activeJobPublishingStep: index }))
  }

  const onDisable = (index: number): boolean => {
    switch (activeSidebar) {
      case 0:
        return index > 0
      case 1:
        return index > 1
      case 2:
        return index > 2
      case 3:
        return index > 3
      case 4:
        return index > 4
      case 5:
        return index > 5
      case 6:
        return index > 6
      case 7:
        return index > 7
      case 8:
        return index > 8
      default:
        return false
    }
  }

  return (
    <div className="flex flex-col gap-4 border border-border-tertiary rounded-lg bg-white">
      <div className="flex flex-col gap-4 items-start p-4">
        <p className="font-bold text-[1.5rem]">Job Publishing Steps</p>
        <div className="flex flex-col items-start justify-start gap-4">
          {steps.map((step, index) => {
            return (
              <button
                className="flex flex-row items-center justify-start gap-4"
                key={index}
                onClick={() => {
                  onHandleClick(index)
                  dispatch(moveToPage({ activeJobPublishingStep: index }))
                }}
                // disabled={onDisable(index)}
              >
                {!onDisable(index) ? <CheckedRadioBtn /> : <Radiobtn />}
                <p className="flex items-start justify-start text-start">
                  {step}
                </p>
              </button>
            )
          })}
        </div>
        <GeneralButton sx={{ width: '100%' }} title="Submit" />
      </div>
    </div>
  )
}

export default JobPublishingSteps
