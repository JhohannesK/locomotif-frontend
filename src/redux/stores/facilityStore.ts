import { configureStore } from '@reduxjs/toolkit'
import { loadFromLocalStorage, saveToLocalStorage } from '../hooks/middleware'
import { facilityReducer } from '../slices/facilitySlice'
import { IState } from '../slices/_types'
import Constants from '../../utils/constants'

const { FACILITY_FORM_DATA } = Constants.LOCALSTORAGE_KEYS
const preloadedState = loadFromLocalStorage(FACILITY_FORM_DATA) as IState

const facilityStore = configureStore({
  reducer: {
    facility: facilityReducer,
  },
  preloadedState: {
    facility: preloadedState,
  },
})

export default facilityStore

facilityStore.subscribe(() => {
  console.log(facilityStore.getState())
  saveToLocalStorage({
    key: FACILITY_FORM_DATA,
    state: facilityStore.getState(),
  })
})

export type FacilityState = ReturnType<typeof facilityStore.getState>
export type FacilityDispatch = typeof facilityStore.dispatch
