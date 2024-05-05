import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../@types'
import { TJobSteps } from '../../types'
import { RootState } from '../store'

const initialState: AppState = {
  activeSidebar: 1,
  activeJobPublishingStep: TJobSteps['Job Details'],
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
    moveToPage: (
      state,
      action: PayloadAction<Pick<AppState, 'activeJobPublishingStep'>>
    ) => {
      state.activeJobPublishingStep = action.payload.activeJobPublishingStep
    },
    nextPage: (state) => {
      state.activeJobPublishingStep += 1
    },
    prevPage: (state) => {
      state.activeJobPublishingStep -= 1
    },
  },
})

export const { setActiveSidebar, nextPage, prevPage, moveToPage } =
  appSlice.actions

export const selectActiveSidebar = (state: RootState) => state.app.activeSidebar
