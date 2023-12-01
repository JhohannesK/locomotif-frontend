import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersonnelSliceType } from '../../../../_shared/@types'
import Constants from '../../../../utils/constants'

const initialState: PersonnelSliceType = {
  activeNav: 0,
  endpoint: 'postings/',
  postingId: undefined,
}

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {
    setHomepage(state, action: PayloadAction<number>) {
      state.activeNav = action.payload
      localStorage.setItem(
        Constants.LOCALSTORAGE_KEYS.ACTIVENAV,
        action.payload.toString()
      )
    },
    setPostingId(state, action: PayloadAction<number>) {
      state.postingId = action.payload
      localStorage.setItem(
        Constants.LOCALSTORAGE_KEYS.POSTINGID,
        action.payload.toString()
      )
    },
    setEndpoint(state, action: PayloadAction<string>) {
      state.endpoint = action.payload
    },
  },
})

export const { setHomepage, setEndpoint, setPostingId } = personnelSlice.actions
