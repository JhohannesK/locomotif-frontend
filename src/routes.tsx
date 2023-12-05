import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
export const routhPaths = Constants.ROUTES
import PersonnelSignup from './pages/auth/personnel'
import FacilitySignUp from './pages/auth/facility'
import SignIn from './pages/auth/signin/signin'
import LandingPage from './pages/landing-page/landingPage'
import PageNotFound from './pages/Page-not-found/page_not_found'
import Posting from './pages/Personnel/posting/Posting'
import PersonnelLayout from './_shared/Layout/Layout'
import FindJob from './pages/Personnel/personnel-home-page/find-job'
import ApplicationsPage from './pages/Personnel/personnel-applications-page/applicationsPage/applicationsPage'
import FacilityHomePage from './pages/Facility/home_page'
import FacilityLayout from './pages/Facility/components/Layout/Layout'

const personnel = [
  {
    path: routhPaths.PAGES.PERSONNEL.personnel,
    element: <PersonnelLayout />,
    children: [
      {
        path: routhPaths.PAGES.PERSONNEL.personnel_findJob,
        element: <FindJob />,
      },
      {
        path: routhPaths.PAGES.PERSONNEL.post,
        element: <Posting />,
      },
      {
        path: routhPaths.PAGES.PERSONNEL.personnel_applications_page,
        element: <ApplicationsPage />,
      },
    ],
  },
]

const facility = [
  {
    path: routhPaths.PAGES.FACILITY.facility,
    element: <FacilityLayout />,
    children: [
      {
        path: routhPaths.PAGES.FACILITY.facility,
        element: <FacilityHomePage />,
      },
    ],
  },
]

const auth = [
  {
    path: routhPaths.GetStarted,
    element: <LandingPage />,
  },
  {
    path: routhPaths.AUTH.signin,
    element: <SignIn />,
  },
  {
    path: routhPaths.AUTH.FACILITY.facility_signup,
    element: <FacilitySignUp />,
  },
  {
    path: routhPaths.AUTH.PERSONNEL.personnel_signup,
    element: <PersonnelSignup />,
  },
]

const routes = createBrowserRouter([
  ...personnel,
  ...facility,
  ...auth,
  {
    path: routhPaths.root,
    element: <App />,
  },
  {
    path: routhPaths.PAGENOTFOUND,
    element: <PageNotFound />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default routes
