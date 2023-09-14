import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuth, ResponseType } from '../@types'
import { loadFromLocalStorage, saveToLocalStorage } from '../hooks/middleware'

const response: IAuth = loadFromLocalStorage({ key: 'auth' })
export const authState: ResponseType = response?.authResponse

const initialState: IAuth = {
  authResponse: {
    first_name: authState?.first_name ?? '',
    last_name: authState?.last_name ?? '',
    other_names: authState?.other_names ?? '',
    role: authState?.role ?? '',
    username: authState?.username ?? '',
    isAuthtneticated: authState?.isAuthtneticated ?? false,
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
