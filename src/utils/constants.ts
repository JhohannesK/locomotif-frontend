import { FacilityType } from '../redux/slices/_types'

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
        facility: '/facility/',
        publish: '/facility/create/post',
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
        key: 'F/P',
      },
      {
        title: 'Create an account',
        subTitle: 'Create an account to get started',
        key: 'Create Account',
      },
      {
        title: 'Terms and Conditions',
        subTitle: 'Accept our terms and conditions',
        key: 'Terms and Conditions',
      },
      {
        title: 'Create Profile',
        subTitle: 'Provide us with your details',
        key: 'Create Profile',
      },
      {
        title: 'Upload your CV',
        subTitle: 'Upload your CV and other documents',
        key: 'Upload CV',
      },
      {
        title: 'Completed',
        subTitle: 'You are all set',
        key: 'Completed',
      },
    ],

    FacilitySteps: [
      {
        title: 'Personnel or Facility',
        subTitle: 'Join us as a Personnel or Facility',
        key: 'F/P',
      },
      {
        title: 'Create an account',
        subTitle: 'Create an account to get started',
        key: 'Create Account',
      },
      // {
      //   title: 'Terms and Conditions',
      //   subTitle: 'Accept our terms and conditions',
      // },
      {
        title: 'Create Profile',
        subTitle: 'Setup your facility profile page',
        key: 'Create Profile',
      },
      {
        title: 'Completed',
        subTitle: 'You are all set',
        key: 'Completed',
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
    FACILITY_FORM_DATA: 'f-FormData',
    TOKEN: 'lmtf-token',
  },
}

export const formData: FacilityType = {
  id: 1,
  recruiter_contact: null,
  location: {
    id: 1,
    address_line_1: '',
    address_line_2: '',
    city: '',
    country: '',
    region: '',
    digital_address: '',
  },
  title: 'Test posting 1',
  description: 'Test posting 1 description',
  advertisement_reason: 'TEMPORARY',
  contract_type: 'LOCUM',
  contract_duration: null,
  contract_working_pattern: null,
  created_at: '2024-02-26T08:04:39.749059Z',
  payment_type: null,
  payment_billing_cylce: null,
  payment_fixed_amount: null,
  payment_max_amount: null,
  payment_min_amount: null,
  payment_currency: 'GHS',
  qualifications: null,
  additional_information: null,
  supporting_document: null,
  pr_required: null,
  pre_application_questions: '',
  how_to_apply: null,
  required_staff_group: null,
  required_area_of_work: null,
  status: 'DRAFT',
  facility: {
    user: 1,
    name: 'Korle Bu Teaching Hospital',
    bio: '',
    telephone: '',
    verified: false,
    country: '',
    region: '',
    city: '',
    digital_address: '',
  },
}

export default Constants
