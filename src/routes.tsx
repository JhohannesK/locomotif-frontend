import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import SiginPageIns from './pages/institution-signin-page/signin_page'
import SiginPage from './pages/doctor-signin-page/signin_page'
import SiginPageIns from './pages/institution-signin-page/signin_page'

const routhPaths = Constants.ROUTES

const routes = createBrowserRouter([
  {
    path: routhPaths.root,
    element: <App />,
  },
  {
    path: routhPaths.institution_signin,
    element: <SiginPageIns />,
  },
  {
    path: routhPaths.doctor_signin,
    element: <SiginPage />,
  },
  {
    path: routhPaths.institution_signin,
    element: <SiginPageIns />,
  },
])

export default routes
