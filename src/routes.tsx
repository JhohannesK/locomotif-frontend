import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import SigninPageIns from './pages/Facility/facility-signin-page/signin_page'
import SignUpPageIns from './pages/Facility/facility-signup-page/signup_page'
import SigninPage from './pages/Personnel/personnel-signin-page/signin_page'
import SignUpPage from './pages/Personnel/personnel-signup-page/signup_page'
import PersonnelHomePage from './pages/Personnel/personnel-home-page/home_page'
import FacilityHomePage from './pages/Facility/facility-home-page/home_page'

const routhPaths = Constants.ROUTES

const routes = createBrowserRouter([
  {
    path: routhPaths.root,
    element: <App />,
  },
  {
    path: routhPaths.facility_signin,
    element: <SigninPageIns />,
  },
  {
    path: routhPaths.facility_signup,
    element: <SignUpPageIns />,
  },
  {
    path: routhPaths.personnel_signin,
    element: <SigninPage />,
  },
  {
    path: routhPaths.personnel_signup,
    element: <SignUpPage />,
  },
  {
    path: routhPaths.personnel_dashboard,
    element: <PersonnelHomePage />,
  },
  {
    path: routhPaths.facility_dashboard,
    element: <FacilityHomePage />,
  },
])

export default routes
