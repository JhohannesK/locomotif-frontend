import { FacilityType } from '../redux/slices/_types'

const Constants = {
  BaseURL: 'https://locomotif-backend.onrender.com/api/',
  DevBaseURL: 'https://locomotif-backend-pr-65.onrender.com/api/',

  PERSONNEL: 'personnel',
  FACILITY: 'facility',

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

  FACILITYNAVLINKS: [
    {
      name: 'Overview',
      to: '/facility/overview',
    },
    {
      name: 'My Postings',
      to: '/facility/mypostings',
    },
    {
      name: 'Analysis',
      to: '/facility/analysis',
    },
    {
      name: 'Profile',
      to: '/facility/profile',
    },
  ],
  PERSONNELNAVLINKS: [
    {
      name: 'Find Job',
      to: '/find-job',
    },
  ],
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
