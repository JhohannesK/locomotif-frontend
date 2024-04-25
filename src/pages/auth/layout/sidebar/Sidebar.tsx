import { useSelector } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import GeneralButton from '../../../../_shared/components/button/Button'
import { colors } from '../../../../colors'
import { RootState } from '../../../../redux/store'
import { useNavigate } from 'react-router-dom'
import Constants from '../../../../utils/constants'
import { Steps } from '../../_types'
import { CheckedRadioBtn, RadioBtn } from '../../../../_shared'
import { useAppDispatch } from '../../../../redux/hooks/hook'

const Sidebar = ({ steps }: { steps: Steps }) => {
  const navigate = useNavigate()
  const activeSidebar = useSelector(
    (state: RootState) => state.app.activeSidebar
  )
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(setActiveSidebar({ activeSidebar: 1 }))
  // }, [dispatch])

  const onHandleClick = (index: number) => {
    if (index === 0) {
      navigate(Constants.ROUTES.GetStarted)
    } else {
      dispatch(setActiveSidebar({ activeSidebar: index }))
    }
  }

  const onDisable = (index: number) => {
    if (activeSidebar === 1) {
      if (index > 1) return true
    }
    if (activeSidebar === 2) {
      if (index > 2) return true
    }
    if (activeSidebar === 3) {
      if (index < 3) return true
    }
    if (activeSidebar === 4) {
      if (index < 3) return true
    }
    return false
  }

  return (
    <div className="hidden lg:flex justify-center bg-background-primary rounded-lg w-[30rem] overflow-y-auto">
      <div className="flex flex-col gap-2 items-center justify-between py-5 px-3">
        <div className="flex flex-col gap-12 items-center justify-center pt-10 text-white">
          <div className="text-xl font-bold">Loco</div>

          <div className="flex flex-col items-start gap-5">
            {steps.map((step, index) => (
              <button
                tabIndex={index}
                // disabled={onDisable(index)}
                key={index}
                onClick={() => onHandleClick(index)}
                className={`${onDisable(index) ? 'opacity-25' : ''} "flex items-center gap-3 justify-start"`}
              >
                {/* <AiOutlineCheckCircle /> */}

                {activeSidebar === index ? (
                  <CheckedRadioBtn isWhite />
                ) : (
                  <RadioBtn />
                )}
                <div className="flex flex-col items-start">
                  <div className="text-lg">{step.title}</div>
                  <div className="text-sm opacity-60">{step.subTitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <GeneralButton
          onClick={() => navigate(Constants.ROUTES.AUTH.signin)}
          title="Already have an Acccout? Sign in"
          sx={{
            border: `1px solid ${colors.border.timberwolf}`,
            padding: '10px 20px',
            width: '100%',
            color: 'white',
            borderRadius: '10px',
            fontSize: '14px',
          }}
        />
      </div>
    </div>
  )
}

export default Sidebar
