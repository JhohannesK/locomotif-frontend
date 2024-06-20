import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Constants from './utils/constants'
import App from './App'
import LandingPage from './pages/auth/shared/GetStarted'
import Overview from './pages/Facility/Overview/Overview'
import RootLayout from './pages/Facility/Publish/PublishLayout'
import FacilitySignUp from './pages/auth/facility/FacilitySignUp'
import PersonnelSignup from './pages/auth/personnel/Personnel-Signup'
import SignIn from './pages/auth/signin/Signin'
import FindJobpage from './pages/Personnels/FindJob/FindJobpage'
import Analysis from './pages/Facility/Analysis/Analysis'
import Profile from './pages/Facility/Profile/Profile'
import MyPostings from './pages/Facility/MyPostings/MyPostings'

export const routePath = Constants.ROUTES

const personnel = [
  {
    path: routePath.PAGES.PERSONNEL.personnel,
    element: <FindJobpage />,
    children: [
      {
        path: routePath.PAGES.PERSONNEL.personnel_findJob,
        element: <FindJobpage />,
      },
      // {
      //   path: routePath.PAGES.PERSONNEL.post,
      //   element: <Posting />,
      // },
      // {
      //   path: routePath.PAGES.PERSONNEL.personnel_applications_page,
      //   element: <ApplicationsPage />,
      // },
    ],
  },
] satisfies RouteObject[]

const facilityRoutePath = routePath.PAGES.FACILITY

const facility: RouteObject[] = [
  // {
  //   path: '/facility',
  //   element: <FacilityRootLayout />,
  //   errorElement: <PageNotFound />,
  // },
  {
    path: facilityRoutePath.overview,
    element: <Overview />,
  },
  {
    path: facilityRoutePath.publish,
    element: <RootLayout />,
  },
  {
    path: facilityRoutePath.myPosting,
    element: <MyPostings />,
  },
  {
    path: facilityRoutePath.analysis,
    element: <Analysis />,
  },
  {
    path: facilityRoutePath.profile,
    element: <Profile />,
  },
]

const auth: RouteObject[] = [
  {
    path: routePath.GetStarted,
    element: <LandingPage />,
  },
  {
    path: routePath.AUTH.signin,
    element: <SignIn />,
  },
  {
    path: routePath.AUTH.FACILITY.facility_signup,
    element: <FacilitySignUp />,
  },
  {
    path: routePath.AUTH.PERSONNEL.personnel_signup,
    element: <PersonnelSignup />,
  },
]

const routes = createBrowserRouter(
  [
    ...personnel,
    ...facility,
    ...auth,
    {
      path: routePath.root,
      element: <App />,
    },
  ],
  {}
)

export default routes
