import { Menu, MenuItem, Typography } from '@mui/material'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { AiOutlineUser } from 'react-icons/ai'
import { BiDoorOpen } from 'react-icons/bi'
import { logoutPersonnel } from '../../../../pages/auth/slice/authSlice'
import { colors } from '../../../../colors'

interface IProfileMenu {
  anchorElUser: null | HTMLElement
  handleCloseUserMenu: () => void
}

const settings = [
  {
    name: 'Open Profile',
    icon: <AiOutlineUser />,
    onClick: () => {},
  },
  {
    name: 'Log out',
    icon: <BiDoorOpen />,
    onClick: () => {},
    sx: { color: 'red' },
  },
]

const ProfileMenu = ({ anchorElUser, handleCloseUserMenu }: IProfileMenu) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>()

  return (
    <Menu
      sx={{
        mt: '45px',
        '& ul.MuiList-root': { background: colors.background.white },
      }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            dispatch(logoutPersonnel())
            handleCloseUserMenu()
          }}
          sx={{ gap: '10px', ...setting.sx }}
        >
          {setting.icon}
          <Typography fontSize={'16px'} textAlign="center">
            {setting.name}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default ProfileMenu
