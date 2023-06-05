import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import SigninPageIns from './pages/Facility/facility-signin-page/signin_page'
import SignUpPageIns from './pages/Facility/facility-signup-page/signup_page'
import SigninPage from './pages/Personnel/personnel-signin-page/signin_page'
import SignUpPage from './pages/Personnel/personnel-signup-page/signup_page'

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
])

export default routes
