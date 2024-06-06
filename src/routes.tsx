import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
export const routhPaths = Constants.ROUTES
import LandingPage from './pages/auth/shared/GetStarted'
import PageNotFound from './_shared/components/cards/page_not_found'
import Overview from './pages/Facility/Overview/Overview'
import RootLayout from './pages/Facility/Publish/RootLayout'
import FacilitySignUp from './pages/auth/facility/FacilitySignUp'
import PersonnelSignup from './pages/auth/personnel/Personnel-Signup'
import SignIn from './pages/auth/signin/Signin'
import FindJobpage from './pages/Personnels/FindJob/FindJobpage'
import FacilityRootLayout from './pages/Facility/Layout'

const personnel = [
  {
    path: routhPaths.PAGES.PERSONNEL.personnel,
    element: <FindJobpage />,
    children: [
      {
        path: routhPaths.PAGES.PERSONNEL.personnel_findJob,
        element: <FindJobpage />,
      },
      // {
      //   path: routhPaths.PAGES.PERSONNEL.post,
      //   element: <Posting />,
      // },
      // {
      //   path: routhPaths.PAGES.PERSONNEL.personnel_applications_page,
      //   element: <ApplicationsPage />,
      // },
    ],
  },
] satisfies RouteObject[]

const facility: RouteObject[] = [
  {
    path: '/facility',
    element: <FacilityRootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: 'overview',
        element: <Overview />,
      },
      {
        path: 'facility/overview/create/post',
        element: <RootLayout />,
      },
      {
        path: 'application',
        element: <div>hello application</div>,
      },
      {
        path: 'analysis',
        element: <div>hello analysis</div>,
      },
      {
        path: 'profile',
        element: <div>hello profile</div>,
      },
    ],
  },
]

const auth: RouteObject[] = [
  {
    path: routhPaths.GetStarted,
    element: <LandingPage />,
  },
  {
    path: routhPaths.AUTH.signin,
    element: <SignIn />,
  },
  {
    path: routhPaths.AUTH.FACILITY.facility_signup,
    element: <FacilitySignUp />,
  },
  {
    path: routhPaths.AUTH.PERSONNEL.personnel_signup,
    element: <PersonnelSignup />,
  },
]

const routes = createBrowserRouter(
  [
    ...personnel,
    ...facility,
    ...auth,
    {
      path: routhPaths.root,
      element: <App />,
    },
  ],
  {}
)

export default routes
