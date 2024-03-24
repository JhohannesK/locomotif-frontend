import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { prevPage } from '../../../../redux/slices/appSlice'

const PreviewPosting = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="border details-container">
      <div className="details-container__wrapper">
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
