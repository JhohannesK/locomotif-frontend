import { AuthContent, AuthUpperContent } from '../../../../_shared/auth_styles'
import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { ImageBox, UpperContentH1 } from '../styles'
import success_img from '.././../../../_shared/assets/success.png'
import Constants from '../../../../utils/constants'
import { useNavigate } from 'react-router-dom'

const FacilitySuccess = () => {
  const navigate = useNavigate()
  return (
    <div style={{ height: '100%', display: 'flex' }}>
      <AuthContent>
        <ImageBox>
          <img
            src={success_img}
            alt="google icon"
            style={{ height: '30%', width: '30%', objectFit: 'cover' }}
          />
        </ImageBox>
        <AuthUpperContent>
          <UpperContentH1>
            {'You’ve successfully Created Your Locomotif Account'}
          </UpperContentH1>
        </AuthUpperContent>

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
      </AuthContent>
    </div>
  )
}

export default FacilitySuccess
