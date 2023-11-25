import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
export const routhPaths = Constants.ROUTES
import FacilityHomePage from './pages/Facility/facility-home-page/home_page'
import PersonnelSignup from './pages/auth/personnel'
import FacilitySignUp from './pages/auth/facility'
import SignIn from './pages/auth/signin/signin'
import LandingPage from './pages/landing-page/landingPage'
import PageNotFound from './pages/Page-not-found/page_not_found'
import Page from './pages/Personnel'
import Posting from './pages/Personnel/posting/Posting'

const routes = createBrowserRouter([
  {
    path: routhPaths.root,
    element: <App />,
  },
  {
    path: routhPaths.AUTH.signin,
    element: <SignIn />,
  },
  {
    path: routhPaths.FACILITY.facility_signup,
    element: <FacilitySignUp />,
  },
  {
    path: routhPaths.PERSONNEL.personnel_signup,
    element: <PersonnelSignup />,
  },
  {
    path: routhPaths.AUTH.PERSONNEL.new_personnel_signup,
    element: <PersonnelSignup />,
  },
  {
    path: routhPaths.AUTH.FACILITY.new_facility_signup,
    element: <FacilitySignUp />,
  },
  {
    path: routhPaths.PERSONNEL.personnel_dashboard,
    element: <Page />,
    children: [
      {
        path: routhPaths.PERSONNEL.post,
        element: <Posting />,
      },
    ],
  },
  {
    path: routhPaths.FACILITY.facility_dashboard,
    element: <FacilityHomePage />,
  },
  {
    path: routhPaths.GetStarted,
    element: <LandingPage />,
  },
  {
    path: routhPaths.PAGENOTFOUND,
    element: <PageNotFound />,
  },
  {
    path: routhPaths.PERSONNEL.personnel_applications_page,
    element: <Page />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default routes
