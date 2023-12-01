import { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import styled from 'styled-components'
import { colors } from '../../colors'
import Constants from '../../utils/constants'
import PersonnelMidContent from '../../pages/Personnel/personnel-home-page/components/PersonnelMidContent'
import ConfirmationModal from '../components/modal/ConfirmationModal'
import LayoutProvider from './context/LayoutContext'
import FilterPane from '../../pages/Personnel/personnel-home-page/components/filter'
import { useSetupInterceptor } from '../../utils/useSetupInterceptor'
import { useSelector } from 'react-redux'
import usePersonnel from '../../pages/Personnel/personnel-home-page/hook/usePersonnel'
import { RootState } from '../../redux/store'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { loadFromLocalStorage } from '../../redux/hooks/middleware'
import { Backdrop, CircularProgress } from '@mui/material'
import PersonnelLeftPane from '../../pages/Personnel/personnel-home-page/components/PersonnelLeftPane'

const PersonnelLayout = () => {
  useSetupInterceptor()

  const filter = useSelector((state: RootState) => state.personnel.endpoint)
  const { fetchProfile } = usePersonnel(filter)

  const { user_role, isLoggedIn, isLogoutLoading } = useSelector(
    (state: RootState) => state.auth
  )

  const { pathname } = useLocation()
  const isMatch = pathname.includes(Constants.PERSONNEL)
  const navigate = useNavigate()

  useEffect(() => {
    const personnelAuthData = loadFromLocalStorage({ key: 'personnelAuth' })

    if (
      personnelAuthData.user_role == Constants.PERSONNEL &&
      personnelAuthData.isLoggedIn
    ) {
      if (!isMatch) {
        navigate(Constants.ROUTES.GetStarted)
      }
      return
    } else {
      navigate(Constants.ROUTES.GetStarted)
    }
  }, [isLoggedIn, user_role, isMatch, navigate, fetchProfile])

  useEffect(() => {
    fetchProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutProvider>
      <LayoutWrapper>
        <PersonnelLayout.ConfirmationModal />
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLogoutLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Navbar type={'personnel'} />
        <ChildrenWrapper>
          <Outlet />
        </ChildrenWrapper>
      </LayoutWrapper>
    </LayoutProvider>
  )
}

export default PersonnelLayout

PersonnelLayout.LeftSide = PersonnelLeftPane
PersonnelLayout.PersonnelMidContent = PersonnelMidContent
PersonnelLayout.ConfirmationModal = ConfirmationModal
PersonnelLayout.PersonnelFilter = FilterPane

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  margin: 0 auto;
  background-color: ${colors.background.antiflashWhite};
`

const ChildrenWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 3rem 3rem 0 3rem;

  ${Constants.LAYOUT.MEDIA_QUERIES.MOBILE} {
    margin: 1rem;
  }
`
