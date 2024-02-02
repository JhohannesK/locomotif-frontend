import { useCallback, useState } from 'react'
import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import {
  AuthContainer,
  AuthContent,
  AuthUpperContent,
  Dropzone,
  StepNavigateButtons,
} from '../../../../_shared/auth_styles'
import { useDropzone } from 'react-dropzone'
import { BiImages } from 'react-icons/bi'
import { FiUpload } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Constants from '../../../../utils/constants'

const UploadCV = () => {
  const [uploads, setUploads] = useState<File[]>()
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    setUploads(acceptedFiles)
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { 'text/*': ['.pdf'] },
    multiple: true,
    maxFiles: 3,
  })

  const navigate = useNavigate()

  return (
    <AuthContainer>
      <AuthContent>
        <AuthUpperContent>
          <h1>Upload Your CV</h1>
          <p>Only PDF allowed</p>
        </AuthUpperContent>
        <Dropzone {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <BiImages size="100" />
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </Dropzone>
        <div className="" style={{ display: 'flex', gap: '10px' }}>
          <div
            className=""
            style={{
              width: '70%',
              height: '42px',
              border: '1px solid black',
              borderRadius: '10px',
            }}
          >
            {uploads?.map((upload) => <p>{upload.name}</p>)}
          </div>
          <GenericButton
            onClick={open}
            icon={<FiUpload />}
            sx={{
              backgroundColor: colors.button.pineGreen,
              width: '30%',
              borderRadius: '10px',
            }}
            title="Upload File"
            size="medium"
          />
        </div>
        <StepNavigateButtons>
          <GenericButton
            onClick={() =>
              navigate(Constants.ROUTES.PAGES.PERSONNEL.personnel_findJob)
            }
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
            type="button"
          />
        </StepNavigateButtons>
      </AuthContent>
    </AuthContainer>
  )
}

export default UploadCV
