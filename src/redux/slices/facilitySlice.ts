import { createSlice } from '@reduxjs/toolkit'
import { IState } from './_types'
import { createFacilityPost } from './apis/facilityThunk'

const initialState: IState = {
  publish_form_state: {
    id: 1,
    recruiter_contact: null,
    location: null,
    title: 'Test posting 1',
    description: 'Test posting 1 description',
    advertisement_reason: 'TEMPORARY',
    contract_type: null,
    contract_duration: null,
    contract_working_pattern: null,
    created_at: '2024-02-26T08:04:39.749059Z',
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
      name: 'Korle Bu Teaching Hospital',
      bio: '',
      telephone: '',
      verified: false,
      country: '',
      region: '',
      city: '',
      digital_address: '',
    },
  },
}

const facilitySlice = createSlice({
  name: 'facility',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createFacilityPost.fulfilled, (state, action) => {
      state.publish_form_state = action.payload.publish_form_state
    })
  },
})

// export const {} = facilitySlice.actions
export const facilityReducer = facilitySlice.reducer
