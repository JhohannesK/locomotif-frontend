const Constants = {
  BaseURL: 'https://locomotif-backend.onrender.com/api/',
  DevBaseURL: 'https://locomotif-backend-pr-65.onrender.com/api/',

  ROUTES: {
    root: '/',
    GetStarted: '/getStarted',
    PAGENOTFOUND: '/404',
    AUTH: {
      signin: '/signin',
      FACILITY: {
        new_facility_signup: '/facility/new-signup',
      },
      PERSONNEL: {
        new_personnel_signup: '/personnel/new-signup',
      },
    },
    FACILITY: {
      facility_signin: '/facility/signin',
      facility_signup: '/facility/signup',
      facility_dashboard: '/facility/dashboard',
    },
    PERSONNEL: {
      personnel_signin: '/personnel/signin',
      personnel_signup: '/personnel/signup',
      personnel_dashboard: '/personnel/find-job',
      personnel_applications_page: '/personnel/applications-page',
    },
  },

  LAYOUT: {
    MEDIA_QUERIES: {
      MOBILE_SM: '@media only screen and (max-width: 480px)',
      MOBILE: '@media only screen and (max-width: 819px)',
      TABLET:
        '@media only screen and (min-width: 820px) and (max-width: 1200px)',
      SMALL_PX: '@media only screen and (min-width: 418px)',
      TABLET_480_PX: '@media only screen and (min-width: 480px)',
      TABLET_580_PX: '@media only screen and (max-width: 580px)',
      TABLET_PX: '@media only screen and (min-width: 768px)',
      TABLET_PX_2:
        '@media only screen and (min-width: 768px) and (max-width: 1024px)',
      TABLET_PX_3: '@media only screen and  (max-width: 1023px)',
      TABLET_MOBILE_PX: '@media only screen and (max-width: 768px)',

      LAPTOP_PX: '@media only screen and (min-width: 1024px) ',
      LAPTOP_M_PX: '@media only screen and (min-width: 1360px) ',
      LAPTOP_L_PX: '@media only screen and (min-width: 1440px)',
      LAPTOP_L_PX_MAX: '@media only screen and (max-width: 1440px)',
    },
  },

  isMenuOpen: true,

  SIDEBAR: {
    PersonnelSteps: [
      {
        title: 'Personnel or Facility',
        subTitle: 'Join us as a Personnel or Facility',
      },
      {
        title: 'Create an account',
        subTitle: 'Create an account to get started',
      },
      {
        title: 'Terms and Conditions',
        subTitle: 'Accept our terms and conditions',
      },
      {
        title: 'Create Profile',
        subTitle: 'Provide us with your details',
      },
      {
        title: 'Upload your CV',
        subTitle: 'Upload your CV and other documents',
      },
      {
        title: 'Completed',
        subTitle: 'You are all set',
      },
    ],

    FacilitySteps: [
      {
        title: 'Personnel or Facility',
        subTitle: 'Join us as a Personnel or Facility',
      },
      {
        title: 'Create an account',
        subTitle: 'Create an account to get started',
      },
      {
        title: 'Terms and Conditions',
        subTitle: 'Accept our terms and conditions',
      },
      {
        title: 'Create Profile',
        subTitle: 'Setup your facility profile page',
      },
      {
        title: 'Completed',
        subTitle: 'You are all set',
      },
    ],
  },
}

export default Constants
