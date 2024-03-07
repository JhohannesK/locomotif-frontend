import { GenericButton } from '../../../_shared'
import { colors } from '../../../colors'
import success_img from '../../../_shared/assets/success.png'
import Constants from '../../../utils/constants'
import { useNavigate } from 'react-router-dom'

const CompletedSuccess = () => {
  const navigate = useNavigate()
  return (
    <div className="auth-container">
      <div className="auth-container__wrapper flex-col items-center">
        <div>
          <img
            src={success_img}
            alt="google icon"
            style={{ height: '10rem', width: '10rem', objectFit: 'cover' }}
          />
        </div>
        <div>
          <div className="font-bold text-4xl capitalize text-center">
            {'You’ve successfully Created Your Locomotif Account'}
          </div>
        </div>

        <GenericButton
          title="Open Dashboard"
          sx={{
            backgroundColor: colors.button.pineGreen,
            width: '100%',
            borderRadius: '10px',
            color: '#F6FBFF',
            textAlign: 'center',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '137.14%',
            marginTop: '2rem',
          }}
          size="large"
          onClick={() => navigate(Constants.ROUTES.PAGES.FACILITY.facility)}
        />
      </div>
    </div>
  )
}

export default CompletedSuccess
