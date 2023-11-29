import { Avatar, Card, Typography } from '@mui/material'
import { HeaderWrapper } from '../styles'
import { IoIosArrowBack } from 'react-icons/io'
import { colors } from '../../../../colors'
import { useNavigate } from 'react-router-dom'
import Constants from '../../../../utils/constants'
import { useDispatch } from 'react-redux'
import { setHomepage } from '../../personnel-home-page/slice/personnelSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const navigateBack = () => {
    navigate(Constants.ROUTES.PAGES.PERSONNEL.personnel_findJob)
    dispatch(setHomepage(1))
  }

  return (
    <HeaderWrapper>
      <Avatar
        sx={{ bgcolor: 'white', color: `${colors.text.night}` }}
        onClick={navigateBack}
      >
        <IoIosArrowBack />
      </Avatar>
      <Card
        sx={{
          paddingY: '10px',
          flexGrow: 1,
          paddingLeft: 2,
          borderRadius: 3,
        }}
        variant="outlined"
      >
        <Typography sx={{ fontWeight: 'bold' }} variant="body1">
          Job Details
        </Typography>
      </Card>
    </HeaderWrapper>
  )
}

export default Header
