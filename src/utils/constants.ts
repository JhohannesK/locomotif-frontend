const Constants = {
  BaseURL: 'https://locomotif-backend.onrender.com/api/',
  DevBaseURL: 'https://locomotif-backend-pr-65.onrender.com/api/',

  PERSONNEL: 'personnel',
  FACILITY: 'facility',

  ROUTES: {
    root: '/',
    GetStarted: '/get-started',
    PAGENOTFOUND: '/404',
    AUTH: {
      signin: '/signin',
      FACILITY: {
        facility_signup: '/facility/signup',
      },
      PERSONNEL: {
        personnel_signup: '/personnel/signup',
      },
    },
    PAGES: {
      FACILITY: {
        facility_dashboard: '/facility/dashboard',
      },
      PERSONNEL: {
        personnel: '/personnel',
        personnel_findJob: '/personnel/find-job',
        personnel_applications_page: '/personnel/applications-page',
        post: '/personnel/post',
      },
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

  NAVBAR: {
    Personnel: {
      FINDJOB: 'Find Jobs',
      APPLICATIONS: 'Applications',
      PROFILE: 'Profile',
      FINDFACILITY: 'Find Facility',
    },
  },

  LOCALSTORAGE_KEYS: {
    PERSONNEL_AUTH: 'personnelAuth',
    PERSONNEL_PROFILE: 'personnelProfile',
    ACTIVENAV: 'activeNav',
    POSTINGID: 'postingId',
  },
}

export default Constants
