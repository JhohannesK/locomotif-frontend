import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import SigninPageIns from './pages/Facility/facility-signin-page/signin_page'
import SignUpPageIns from './pages/Facility/facility-signup-page/signup_page'
import SigninPage from './pages/Personnel/personnel-signin-page/signin_page'
import SignUpPage from './pages/Personnel/personnel-signup-page/signup_page'
import HomePage from './pages/Personnel/personnel-home-page/home_page'
import { authState } from './redux/slices/authSlice'
import ProtectedRoute from './utils/ProtectedRoute'

export const routhPaths = Constants.ROUTES

const userRole = authState.role

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
    element: (
      <ProtectedRoute allowedRoles={['doctor']} userRole={userRole}>
        <HomePage />
      </ProtectedRoute>
    ),
  },
])

export default routes
