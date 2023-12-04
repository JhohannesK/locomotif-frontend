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
import { AiFillCheckCircle } from 'react-icons/ai'
import usePosting from '../../../pages/Personnel/posting/hook/usePosting'

export default function ConfirmationModal() {
  const { open, handleClose, isSuccess, isDanger, setDanger } =
    useContext(LayoutContext)
  const { mutate } = usePosting()
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
              <AiFillCheckCircle
                size={40}
                color={colors.background.pineGreen}
              />
            ) : null}
            <Typography
              id="modal-modal-title"
              sx={{ fontWeight: 'bold' }}
              fontSize={'18px'}
            >
              Are you sure you want to apply for this job?{' '}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 0 }}
              fontSize={'14px'}
            >
              Your application will be sent to the Medical Facility. Check your
              application board frequently for response on your application. All
              the best!!
            </Typography>
          </DialogContent>
          <DialogActions>
            <ButtonStyles>
              {isSuccess ? (
                <GeneralButton
                  title="Explore other jobs"
                  sx={{
                    padding: '1rem 2rem',
                    flexGrow: 1,
                  }}
                />
              ) : isDanger ? (
                <>
                  <GeneralButton
                    title="Cancel"
                    onClick={() => {
                      handleClose()
                      setDanger(false)
                    }}
                    sx={{
                      padding: '1rem 2rem',
                      background: 'white',
                      // flexGrow: 1,
                      border: `1px solid ${colors.background.pineGreen}`,
                      color: `${colors.background.pineGreen}`,
                      ':hover': {
                        color: 'white',
                      },
                    }}
                  />
                  <GeneralButton
                    onClick={mutate}
                    title="Retry"
                    sx={{
                      padding: '1rem 2rem',
                      flexGrow: 1,
                    }}
                  />
                </>
              ) : (
                <>
                  <GeneralButton
                    title="Cancel"
                    onClick={() => {
                      handleClose()
                      setDanger(false)
                    }}
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
                    onClick={mutate}
                    title="Confirm"
                    sx={{
                      padding: '1rem 2rem',
                      flexGrow: 1,
                    }}
                  />
                </>
              )}
            </ButtonStyles>
          </DialogActions>
        </Wrapper>
      </Dialog>
    </div>
  )
}

const Wrapper = styled.div`
  padding-bottom: 10px;
  width: 450px;
`

const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  //
`
// const CheckMark = styled.div`
//   background: ${colors.background.pineGreen};
//   border-radius: '50%';
//   display: 'flex';
//   justify-content: 'center';
//   align-items: 'center';
//   width: '40px';
//   height: '40px';
// `
