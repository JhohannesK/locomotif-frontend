import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'

export interface a {
  authResponse: ResponseType
}

type ResponseType = {
  first_name: string
  last_name: string
  other_names: string
  role: string
  username: string
}

const initialState: a = {
  authResponse: {
    first_name: '',
    last_name: '',
    other_names: '',
    role: '',
    username: '',
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<ResponseType>) {
      state.authResponse = action.payload
      console.log('login')
    },
  },
})

export const { login } = authSlice.actions

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
