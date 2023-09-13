import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { a, ResponseType } from '../@types'
import { loadFromLocalStorage, saveToLocalStorage } from '../hooks/middleware'

const response: a = loadFromLocalStorage({ key: 'auth' })
const authState: ResponseType = response?.authResponse
console.log('🚀 ~ file: authSlice.ts:7 ~ authState:', authState)

const initialState: a = {
  authResponse: {
    first_name: authState?.first_name ?? '',
    last_name: authState?.last_name ?? '',
    other_names: authState?.other_names ?? '',
    role: authState?.role ?? '',
    username: authState?.username ?? '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<ResponseType>) {
      state.authResponse = action.payload
      saveToLocalStorage({ state, key: 'auth' })
    },
  },
})

export const { login } = authSlice.actions
