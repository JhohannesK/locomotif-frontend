import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import SigninPageIns from './pages/Facility/facility-signin-page/signin_page'
// import SignUpPageIns from './pages/Facility/facility-signup-page/signup_page'
import SigninPage from './pages/Personnel/personnel-signin-page/signin_page'
import SignUpPage from './pages/Personnel/personnel-signup-page/signup_page'
import HomePage from './pages/Personnel/personnel-home-page/home_page'
// import { authState } from './redux/slices/authSlice'
// import ProtectedRoute from './utils/ProtectedRoute'
export const routhPaths = Constants.ROUTES
import FacilityHomePage from './pages/Facility/facility-home-page/home_page'
import PersonnelSignup from './pages/auth/personnel'
import FacilitySignUp from './pages/auth/facility'
// const userRole = authState?.role

const routes = createBrowserRouter([
  {
    path: routhPaths.root,
    element: <App />,
  },
  {
    path: routhPaths.FACILITY.facility_signin,
    element: <SigninPageIns />,
  },
  {
    path: routhPaths.FACILITY.facility_signup,
    element: <FacilitySignUp />,
  },
  {
    path: routhPaths.PERSONNEL.personnel_signin,
    element: <SigninPage />,
  },
  {
    path: routhPaths.PERSONNEL.personnel_signup,
    element: <SignUpPage />,
  },
  {
    path: routhPaths.AUTH.PERSONNEL.new_personnel_signup,
    element: <PersonnelSignup />,
  },
  {
    path: routhPaths.AUTH.FACILITY.new_facility_signup,
    element: <PersonnelSignup />,
  },
  {
    path: routhPaths.PERSONNEL.personnel_dashboard,
    element: (
      // <ProtectedRoute allowedRoles={['doctor']} userRole={userRole}>
      //   <HomePage />
      // </ProtectedRoute>
      <HomePage />
    ),
  },
  {
    path: routhPaths.FACILITY.facility_dashboard,
    element: <FacilityHomePage />,
  },
])

export default routes
