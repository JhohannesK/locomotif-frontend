import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Constants from '../../../../utils/constants'

const initialState: { activeNav: number; postingId: number | undefined } = {
  activeNav: 1,
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
        Constants.LOCALSTORAGE_KEYS.ACTIVENAV,
        action.payload.toString()
      )
    },
  },
})

export const { setHomepage, setPostingId } = personnelSlice.actions
