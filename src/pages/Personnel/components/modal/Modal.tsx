import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import GeneralButton from '../../../../_shared/components/button/Button'
import { colors } from '../../../../colors'
import styled from 'styled-components'

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: () => void
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
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
        </Box>
      </Modal>
    </div>
  )
}

const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
