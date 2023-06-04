import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import SiginPageIns from './pages/Facility/facility-signin-page/signin_page'
import SiginPage from './pages/Personnel/personnel-signin-page/signin_page'
import SignUpPage from './pages/Personnel/personnel-SignUp-Page/signup_page'

const routhPaths = Constants.ROUTES

const routes = createBrowserRouter([
  {
    path: routhPaths.root,
    element: <App />,
  },
  {
    path: routhPaths.facility_signin,
    element: <SiginPageIns />,
  },
  {
    path: routhPaths.personnel_signin,
    element: <SiginPage />,
  },
  {
    path: routhPaths.personnel_signup,
    element: <SignUpPage />,
  },
])

export default routes
