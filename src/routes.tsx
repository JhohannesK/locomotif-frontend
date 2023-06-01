import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import SiginPageIns from './pages/institution-signin-page/signin_page'
import SiginPage from './pages/doctor-signin-page/signin_page'
<<<<<<< HEAD
<<<<<<< HEAD
import SiginPageIns from './pages/institution-signin-page/signin_page'
=======
import SiginPage from './pages/institution-signin-page/signin_page'
>>>>>>> dba6536 (Add sigin page for institutions)
=======
>>>>>>> 502486d (Use general input for password field and fix merge conflicts (#19))

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
])

export default routes
