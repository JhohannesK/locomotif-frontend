import Typography from '@mui/material/Typography'
import GeneralButton from '../../../../_shared/components/button/Button'
import { colors } from '../../../../colors'
import styled from 'styled-components'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'

export default function BasicModal({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: () => void
}) {
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
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Are you sure you want to apply for this job?{' '}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </DialogContent>

          <ButtonStyles>
            <GeneralButton
              title="Decline"
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
              title="Proceed"
              sx={{
                padding: '1rem 2rem',
              }}
            />
          </ButtonStyles>
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
