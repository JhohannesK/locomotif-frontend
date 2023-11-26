import { DescriptionWrapper } from '../styles'
import { Typography } from '@mui/material'

const JobDescription = () => {
  return (
    <DescriptionWrapper
      variant="outlined"
      sx={{ py: 2, px: 4, borderRadius: 3 }}
    >
      <Typography marginBottom={3} fontWeight={'bold'} variant="h6">
        Job Description
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quae, voluptas, officia quos nemo quidem voluptatibus
        voluptatum fugiat, doloribus excepturi. Quisquam voluptate, quae,
        voluptas, officia quos nemo quidem voluptatibus voluptatum fugiat,
        doloribus excepturi.
      </Typography>
    </DescriptionWrapper>
  )
}

export default JobDescription
