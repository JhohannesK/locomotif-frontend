import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import SiginPageIns from './pages/institution-signin-page/signin_page'
import SiginPage from './pages/doctor-signin-page/signin_page'

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
])

export default routes
