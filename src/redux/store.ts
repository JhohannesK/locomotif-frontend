import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appSlice } from './slices/appSlice'
import { authReducer } from './slices/authSlice'
import { facilitySlice } from './slices/facilitySlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'facility_reducer',
  storage,
}

const persistedReducer = combineReducers({
  facility: persistReducer(persistConfig, facilitySlice.reducer),
  auth: authReducer,
  app: appSlice.reducer,
})

const store = configureStore({
  reducer: persistedReducer,
})

export default store

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
