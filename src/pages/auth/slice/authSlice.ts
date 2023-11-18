import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserAuthState, UserAuthType } from './_types'
import { RootState } from '../../../redux/store'
import axios, { AxiosResponse } from 'axios'
import Constants from '../../../utils/constants'
import { saveToLocalStorage } from '../../../redux/hooks/middleware'

const initialState: UserAuthType = {
  user_role: {
    user_role: undefined as unknown as UserAuthState,
  },
  isLoading: false,
  isLoggedIn: false,
  errorMessage: undefined,
}

export const login = createAsyncThunk<
  { user_role: UserAuthState },
  { email: string; password: string },
  { state: RootState }
>('auth/login', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response: {
      user_role: UserAuthState
    } = await axios
      .post(`${Constants.BaseURL}auth/login/`, data)
      .then((res: AxiosResponse) => {
        return res.data
      })
      .catch((err) => {
        console.log(err)
        dispatch(
          login.rejected(err, '', { email: data.email, password: 'password' })
        )
      })
    return response
  } catch (error) {
    rejectWithValue(error)
    throw error
  }
})

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios
        .post(`${Constants.BaseURL}auth/signup/`, data)
        .then((res: AxiosResponse) => {
          res.data
          // dispatch(login({ ...responseData, isAuthenticated: true }))
        })
      return response
    } catch (error) {
      rejectWithValue(error)
      throw error
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false
      state.user_role.user_role = undefined as unknown as UserAuthState
      saveToLocalStorage({
        state: {
          user_role: undefined as unknown as UserAuthState,
          isLoggedIn: false,
        },
        key: 'personnelAuth',
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.user_role = action.payload
      state.isLoggedIn = true
      saveToLocalStorage({
        state: { user_role: action.payload.user_role, isLoggedIn: true },
        key: 'personnelAuth',
      })
    })
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false
      state.isLoggedIn = false
      state.errorMessage = 'Login failed'
    })
  },
})

export const authReducer = authSlice.reducer
