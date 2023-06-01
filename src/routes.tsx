import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import SiginPage from './pages/doctor-signin-page/signin_page'

const routhPaths = Constants.ROUTES

const routes = createBrowserRouter([
  {
    path: routhPaths.root,
    element: <App />,
  },
  {
    path: routhPaths.doctor_signin,
    element: <SiginPage />,
  }
])

export default routes
