import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../@types'
import { RootState } from '../store'

const initialState: AppState = {
  activeSidebar: 1,
  activeJobPublishingStep: 2,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveSidebar: (
      state,
      action: PayloadAction<Pick<AppState, 'activeSidebar'>>
    ) => {
      state.activeSidebar = action.payload.activeSidebar
    },
    setActiveJobPublishingStep: (
      state,
      action: PayloadAction<Pick<AppState, 'activeJobPublishingStep'>>
    ) => {
      state.activeJobPublishingStep = action.payload.activeJobPublishingStep
    },
  },
})

export const { setActiveSidebar, setActiveJobPublishingStep } = appSlice.actions

export const selectActiveSidebar = (state: RootState) => state.app.activeSidebar
