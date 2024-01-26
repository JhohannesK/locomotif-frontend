import {
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
} from '@mui/material'
import { colors } from '../../colors'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === 'light'
        ? `${colors.background.pineGreen}`
        : `${colors.background.white}`,
  },
}))

export default function LocoProgressBars({ value }: { value: number }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={value} />
    </Box>
  )
}
