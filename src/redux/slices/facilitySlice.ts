import { createSlice } from '@reduxjs/toolkit'
import { IState } from './_types'
import { createFacilityPost, updateFacilityPost } from './apis/facilityThunk'

const initialState: IState = {
  publish_form_state: {
    id: 1,
    recruiter_contact: null,
    location: {
      id: 0,
      address_line_1: '',
      address_line_2: '',
      city: '',
      country: '',
      region: '',
      digital_address: '',
    },
    title: '',
    description: '',
    advertisement_reason: 'TEMPORARY',
    contract_type: null,
    contract_duration: null,
    contract_working_pattern: null,
    created_at: '',
    payment_type: null,
    payment_billing_cylce: null,
    payment_fixed_amount: null,
    payment_max_amount: null,
    payment_min_amount: null,
    payment_currency: 'GBP',
    qualifications: null,
    additional_information: null,
    supporting_document: null,
    pr_required: null,
    pre_application_questions: undefined,
    how_to_apply: null,
    required_staff_group: null,
    required_area_of_work: null,
    status: 'DRAFT',
    facility: {
      user: 1,
      name: '',
      bio: '',
      telephone: '',
      verified: false,
      country: '',
      region: '',
      city: '',
      digital_address: '',
    },
  },
  status_code: '001',
}

export const facilitySlice = createSlice({
  name: 'facility',
  initialState,
  reducers: {
    setStatusCodeToDef: (state) => {
      state.status_code = '001'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createFacilityPost.fulfilled, (state, action) => {
      state.publish_form_state = action.payload.publish_form_state
      state.status_code = '000'
    })
    builder.addCase(updateFacilityPost.fulfilled, (state, action) => {
      state.publish_form_state = action.payload.publish_form_state
      state.status_code = '000'
    })
  },
})

export const { setStatusCodeToDef } = facilitySlice.actions
