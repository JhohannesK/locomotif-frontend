import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Constants from '../../../../utils/constants'

const initialState: { activeNav: number } = {
  activeNav: 5,
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
  },
})

export const { setHomepage } = personnelSlice.actions
