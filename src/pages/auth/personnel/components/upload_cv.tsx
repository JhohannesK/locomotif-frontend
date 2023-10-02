import { useCallback } from 'react'
import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import {
  AuthContainer,
  AuthContent,
  AuthUpperContent,
  StepNavigateButtons,
} from '../../../../_shared/auth_styles'
import { useDropzone } from 'react-dropzone'

const UploadCV = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files

    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <AuthContainer>
      <AuthContent>
        <AuthUpperContent>
          <h1>Upload Your CV</h1>
          <p>Only PDF allowed</p>
        </AuthUpperContent>
        <div
          style={{ width: '100%', height: '100px', border: '1px dashed grey' }}
          {...getRootProps()}
        >
          <input
            style={{ width: '100%', height: '100px' }}
            {...getInputProps()}
          />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          {}
        </div>
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
