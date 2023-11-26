import Typography from '@mui/material/Typography'
import GeneralButton from '../../../../_shared/components/button/Button'
import { colors } from '../../../../colors'
import styled from 'styled-components'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { useContext } from 'react'
import { LayoutContext } from '../../../../_shared/Layout/context/LayoutContext'

export default function ConfirmationModal() {
  const { open, handleClose } = useContext(LayoutContext)
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
            <Typography id="modal-modal-title" sx={{ fontWeight: 'bold' }}>
              Are you sure you want to apply for this job?{' '}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Your application will be sent to the Medical Facility. Check your
              application board frequently for response on your application. All
              the best!!
            </Typography>
          </DialogContent>

          <ButtonStyles>
            <GeneralButton
              title="Cancel"
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
