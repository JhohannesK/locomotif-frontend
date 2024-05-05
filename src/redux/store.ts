import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './slices/appSlice'
import { authReducer } from './slices/authSlice'
import { facilitySlice } from './slices/facilitySlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appSlice.reducer,
    facility: facilitySlice.reducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
