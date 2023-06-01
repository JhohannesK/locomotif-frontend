import { createBrowserRouter } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'

const routhPaths = Constants.ROUTES

const routes = createBrowserRouter([
  {
    path: routhPaths.root,
    element: <App />,
  },
])

export default routes
