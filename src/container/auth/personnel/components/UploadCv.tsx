import { useCallback, useState } from 'react'
import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useDropzone } from 'react-dropzone'
import { BiImages } from 'react-icons/bi'
import { FiUpload } from 'react-icons/fi'
// import Constants from '../../../../utils/constants'

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

  // const navigate = useNavigate()

  return (
    <div className="auth-container">
      <div className="auth-container__wrapper">
        <form className="form-control">
          <div>
            <h1 className="text-4xl font-bold">Upload Your CV</h1>
            <p className="text-sm opacity-60">Only PDF allowed</p>
          </div>
          <div
            className="border flex items-center justify-center rounded-lg h-40 border-dashed border-border-tertiary bg-zinc-100"
            {...getRootProps()}
          >
            <div className="flex flex-col items-center justify-center">
              <input {...getInputProps()} />
              {isDragActive ? (
                <BiImages size="100" />
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
          </div>
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <div className="w-[70%] h-10 border-1 border-black rounded-lg border border-border-tertiary p-2  truncate">
              {uploads?.map((upload) => <p>{upload.name}</p>)}
            </div>
            <GenericButton
              onClick={open}
              icon={<FiUpload />}
              sx={{
                backgroundColor: colors.button.pineGreen,
                // width: '30%',
                padding: '8px',
                borderRadius: '10px',
              }}
              title="Upload File"
              size="medium"
            />
          </div>
          <div className="flex items-center gap-4">
            <GenericButton
              // onClick={() =>
              //   navigate(Constants.ROUTES.PAGES.PERSONNEL.personnel_findJob)
              // }
              sx={{
                backgroundColor: colors.button.white,
                color: colors.text.pineGreen,
                width: '100%',
                border: `2px solid ${colors.border.timberwolf}`,
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
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadCV
