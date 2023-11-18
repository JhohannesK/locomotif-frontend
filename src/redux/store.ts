import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './slices/appSlice'
import { personnelSlice } from '../pages/Personnel/personnel-home-page/slice/personnelSlice'
import { authReducer } from '../pages/auth/slice/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appSlice.reducer,
    personnel: personnelSlice.reducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
