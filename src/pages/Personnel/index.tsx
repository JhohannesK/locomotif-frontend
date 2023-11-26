import { useSelector } from 'react-redux'
import Layout from '../../_shared/Layout/Layout'
import ConditionRender from '../../utils/ConditionRender'
import { Wrapper } from './personnel-home-page/styles'
import { RootState } from '../../redux/store'
import ApplicationsPage from './personnel-applications-page/applicationsPage/applicationsPage'
import PersonnelHomePage from './personnel-home-page/home_page'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Constants from '../../utils/constants'
import { loadFromLocalStorage } from '../../redux/hooks/middleware'
import { Backdrop, CircularProgress } from '@mui/material'
import PostingPage from './posting/Posting'
import usePersonnel from './personnel-home-page/hook/usePersonnel'

const Page = () => {
  const Application = ConditionRender(ApplicationsPage)
  const Personnel = ConditionRender(PersonnelHomePage)
  const Posting = ConditionRender(PostingPage)
  const LeftPane = ConditionRender(Layout.LeftSide)

  const filter = useSelector((state: RootState) => state.personnel.endpoint)
  const { data, isLoading, fetchProfile } = usePersonnel(filter)
  // const { fetchProfile } = usePersonnel()

  const { user_role, isLoggedIn, isLogoutLoading } = useSelector(
    (state: RootState) => state.auth
  )

  const { pathname } = useLocation()
  const isMatch = pathname.includes(Constants.PERSONNEL)
  const navigate = useNavigate()
  const activeNavIndex = loadFromLocalStorage({
    key: Constants.LOCALSTORAGE_KEYS.ACTIVENAV,
  })

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
    <Layout dashboardType="personnel">
      <Layout.ConfirmationModal />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLogoutLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Wrapper>
        <LeftPane renderIf={activeNavIndex < 5} />
        <Personnel
          data={data}
          isLoading={isLoading}
          renderIf={activeNavIndex === 1}
        />
        <Application renderIf={activeNavIndex === 3} />
      </Wrapper>
      <Posting renderIf={activeNavIndex === 5} />
    </Layout>
  )
}

export default Page
