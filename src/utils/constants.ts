const Constants = {
  BaseURL: 'https://locomotif-backend.onrender.com/api/',

  ROUTES: {
    root: '/',
    facility_signin: '/facility/signin',
    facility_signup: '/facility/signup',
    personnel_signin: '/personnel/signin',
    personnel_signup: '/personnel/signup',
    personnel_dashboard: '/personnel/dashboard',
    facility_dashboard: '/facility/dashboard',
  },

  LAYOUT: {
    MEDIA_QUERIES: {
      MOBILE_SM: '@media only screen and (max-width: 480px)',
      MOBILE: '@media only screen and (max-width: 819px)',
      TABLET:
        '@media only screen and (min-width: 820px) and (max-width: 1200px)',
      SMALL_PX: '@media only screen and (min-width: 418px)',
      TABLET_480_PX: '@media only screen and (min-width: 480px)',
      TABLET_PX: '@media only screen and (min-width: 768px)',
      TABLET_PX_2:
        '@media only screen and (min-width: 768px) and (max-width: 1024px)',
      TABLET_PX_3: '@media only screen and  (max-width: 1023px)',
      TABLET_MOBILE_PX: '@media only screen and (max-width: 768px)',

      LAPTOP_PX: '@media only screen and (min-width: 1024px) ',
      LAPTOP_M_PX: '@media only screen and (min-width: 1360px) ',
      LAPTOP_L_PX: '@media only screen and (min-width: 1440px)',
    },
  },

  isMenuOpen: true,
}

export default Constants
