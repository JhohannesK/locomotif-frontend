import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook'
import { prevPage } from '../../../../redux/slices/appSlice'

const PreviewPosting = () => {
  const dispatch = useAppDispatch()
  const { publish_form_state } = useAppSelector((state) => state.facility)
  console.log('🚀 ~ PreviewPosting ~ publish_form_state:', publish_form_state)
  return (
    <div className="border details-container">
      <div className="details-container__wrapper">
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Preview before submission
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Job Details
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Staff Information
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Contract Details
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Pay type</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Job Details
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Job Details
            </p>
          </div>
        </div>
        <div className="btn-group">
          <GenericButton
            type="button"
            sx={{
              width: '8rem',
              bgcolor: 'white',
              border: `1px solid ${colors.text.pineGreen}`,
              color: `${colors.text.pineGreen}`,
            }}
            title="Previous"
            onClick={() => {
              dispatch(prevPage())
            }}
          />
          <GenericButton
            type="button"
            sx={{ width: '8rem' }}
            title="Submit"
            onClick={() => {
              // dispatch(nextPage())
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PreviewPosting
