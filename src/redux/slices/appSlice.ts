import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../@types'
import { RootState } from '../store'

const initialState: AppState = {
  activeSidebar: 3,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveSidebar: (state, action: PayloadAction<AppState>) => {
      state.activeSidebar = action.payload.activeSidebar
    },
  },
})

export const { setActiveSidebar } = appSlice.actions

export const selectActiveSidebar = (state: RootState) => state.app.activeSidebar
