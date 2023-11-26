import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersonnelSliceType } from '../../../../_shared/@types'

const initialState: PersonnelSliceType = {
  activeNav: 1,
  endpoint: 'postings/',
}

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {
    setHomepage(state, action: PayloadAction<number>) {
      state.activeNav = action.payload
    },
    setEndpoint(state, action: PayloadAction<string>) {
      state.endpoint = action.payload
    },
  },
})

export const { setHomepage, setEndpoint } = personnelSlice.actions
