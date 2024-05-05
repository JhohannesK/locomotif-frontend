import { createAsyncThunk } from '@reduxjs/toolkit'
import { Api } from '../../../utils/lib/SetupInterceptor'
import { IState } from '../_types'

export const createFacilityPost = createAsyncThunk<IState, IState>(
  'facility/createFacilityPost',
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await Api.post(
        '/postings/',
        data.publish_form_state
      ).then((res) => res.data)
      fulfillWithValue(data)
      return response
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const updateFacilityPost = createAsyncThunk<IState, IState>(
  'facility/updateFacilityPost',
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await Api.put(
        `/postings/${data.publish_form_state.id}`,
        data.publish_form_state
      ).then((res) => res.data)
      fulfillWithValue(data)
      return response
    } catch (error) {
      rejectWithValue(error)
    }
  }
)
