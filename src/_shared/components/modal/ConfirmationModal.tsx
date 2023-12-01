import Typography from '@mui/material/Typography'
import GeneralButton from '../button/Button'
import { colors } from '../../../colors'
import styled from 'styled-components'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { useContext } from 'react'
import { LayoutContext } from '../../Layout/context/LayoutContext'
import { CgDanger } from 'react-icons/cg'
import { BsCheck } from 'react-icons/bs'

export default function ConfirmationModal({
  isDanger,
}: {
  isDanger?: boolean
}) {
  const { open, handleClose, isSuccess } = useContext(LayoutContext)
  console.log('🚀 ~ file: ConfirmationModal.tsx:17 ~ isSuccess:', isSuccess)
  return (
    <div
      style={{
        background: 'red',
        borderRadius: '20px',
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Wrapper>
          <DialogTitle>
            {isDanger ? (
              <CgDanger size={40} color={'red'} />
            ) : isSuccess ? (
              <CheckMark>
                <BsCheck size={30} color={'white'} />
              </CheckMark>
            ) : null}
            <Typography id="modal-modal-title" sx={{ fontWeight: 'bold' }}>
              Are you sure you want to apply for this job?{' '}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography id="modal-modal-description" sx={{ mt: 0 }}>
              Your application will be sent to the Medical Facility. Check your
              application board frequently for response on your application. All
              the best!!
            </Typography>
          </DialogContent>
          <DialogActions>
            {isSuccess ? (
              <ButtonStyles>
                <GeneralButton
                  title="Explore other jobs"
                  sx={{
                    padding: '1rem 2rem',
                  }}
                />
              </ButtonStyles>
            ) : (
              <ButtonStyles>
                <GeneralButton
                  title="Cancel"
                  onClick={handleClose}
                  sx={{
                    padding: '1rem 2rem',
                    background: 'white',
                    border: `1px solid ${colors.background.pineGreen}`,
                    color: `${colors.background.pineGreen}`,
                    ':hover': {
                      color: 'white',
                    },
                  }}
                />
                <GeneralButton
                  title="Confirm"
                  sx={{
                    padding: '1rem 2rem',
                  }}
                />
              </ButtonStyles>
            )}
          </DialogActions>
        </Wrapper>
      </Dialog>
    </div>
  )
}

const Wrapper = styled.div`
  padding-bottom: 10px;
`

const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const CheckMark = styled.div`
  background: ${colors.background.pineGreen};
  border-radius: '50%';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  width: '40px';
  height: '40px';
`
