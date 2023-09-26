import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { appSlice } from './slices/appSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    app: appSlice.reducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
