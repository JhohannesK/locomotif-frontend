import { createAsyncThunk } from '@reduxjs/toolkit'
import { Api } from '../../../utils/lib/SetupInterceptor'
import { IState } from '../_types'

export const createFacilityPost = createAsyncThunk<IState, IState>(
  'facility/createFacilityPost',
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await Api.post('/facility', data).then((res) => res.data)
      fulfillWithValue(data)
      return response
    } catch (error) {
      rejectWithValue(error)
    }
  }
)
