// import React from 'react'
import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import {
  AuthContainer,
  AuthContent,
  AuthUpperContent,
  StepNavigateButtons,
} from '../../../../_shared/auth_styles'

const UploadCV = () => {
  return (
    <AuthContainer>
      <AuthContent>
        <AuthUpperContent>
          <h1>Upload Your CV</h1>
          <p>Only PDF allowed</p>
        </AuthUpperContent>

        <StepNavigateButtons>
          <GenericButton
            sx={{
              backgroundColor: colors.button.white,
              color: colors.text.pineGreen,
              width: '100%',
              // border:`2px solid ${colors.border.pineGreen}`,
              borderRadius: '10px',
            }}
            title="Skip"
            size="medium"
            variantText="outlined"
          />
          <GenericButton
            sx={{
              backgroundColor: colors.button.pineGreen,
              width: '100%',
              borderRadius: '10px',
            }}
            title="Next"
            size="medium"
          />
        </StepNavigateButtons>
      </AuthContent>
    </AuthContainer>
  )
}

export default UploadCV
