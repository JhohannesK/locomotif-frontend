import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Ilocation, IRecruiterContact, IState } from './_types'
import { createFacilityPost, updateFacilityPost } from './apis/facilityThunk'
import React from 'react'

const initialState: IState = {
  publish_form_state: {
    id: 1,
    recruiter_contact: null,
    location: null,
    title: '',
    description: '',
    advertisement_reason: 'REPLACEMENT',
    contract_type: null,
    contract_duration: null,
    contract_working_pattern: null,
    created_at: '',
    payment_type: null,
    payment_billing_cylce: 'YEAR',
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
    handleChange: (
      state,
      action: PayloadAction<React.ChangeEvent<HTMLInputElement>>
    ) => {
      const { name, value } = action.payload.target

      if (
        name === 'country' ||
        name === 'region' ||
        name === 'city' ||
        name === 'digital_address' ||
        name.includes('address')
      ) {
        state.publish_form_state.location = {
          ...state.publish_form_state.location,
          [name]: value,
        } as Ilocation
      } else {
        state.publish_form_state = {
          ...state.publish_form_state,
          [name]: value,
        }
      }
    },
    handleSelectChange: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload
      if (
        name === 'contract_duration' ||
        name === 'payment_billing_cylce' ||
        name === 'payment_currency' ||
        name === 'required_area_of_work'
      ) {
        state.publish_form_state = {
          ...state.publish_form_state,
          [name]: value,
        }
        return
      }
      state.publish_form_state.location = {
        ...state.publish_form_state.location,
        [name]: value,
      } as Ilocation
    },
    handleRecruiterContactChange: (
      state,
      action: PayloadAction<React.ChangeEvent<HTMLInputElement>>
    ) => {
      const { name, value } = action.payload.target
      state.publish_form_state.recruiter_contact = {
        ...state.publish_form_state.recruiter_contact,
        [name]: value,
      } as IRecruiterContact
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

export const {
  setStatusCodeToDef,
  handleChange,
  handleSelectChange,
  handleRecruiterContactChange,
} = facilitySlice.actions
