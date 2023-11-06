import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { appSlice } from './slices/appSlice'
import { personnelSlice } from '../pages/Personnel/personnel-home-page/slice/personnelSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    app: appSlice.reducer,
    personnel: personnelSlice.reducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
