import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PersonnelProfileType, UserAuthState, UserAuthType } from './_types'
import { RootState } from '../stores/store'
import axios, { AxiosResponse } from 'axios'
import Constants from '../../utils/constants'
import { saveToLocalStorage } from '../hooks/middleware'

const initialState: UserAuthType = {
  user_role: {
    user_role: undefined as unknown as UserAuthState,
  },
  personnelProfile: {
    first_name: '',
    other_names: '',
    last_name: '',
    telephone: '',
    date_of_birth: '',

    verified: false,
    ratings: 4,

    CV: '',
    year_of_registration: '',
    specialities: [],

    country: '',
    region: '',
    city: '',
    digital_address: '',
  },
  isLoading: false,
  isLoggedIn: true,
  errorMessage: undefined,
  isLogoutLoading: false,
}

export const fetchPersonnelProfile = createAsyncThunk<PersonnelProfileType>(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios
        .get(`${Constants.BaseURL}auth/profile/`)
        .then((res: AxiosResponse) => res.data)
      return response
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const logoutPersonnel = createAsyncThunk<
  | {
      message: string
    }
  | undefined
>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const response: { message: string } = await axios
      .post(`${Constants.BaseURL}auth/logout/`)
      .then((res: AxiosResponse) => res?.data)
    return response
  } catch (error) {
    rejectWithValue(error)
  }
})

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
        console.log('something weird init', err)
        dispatch(
          login.rejected(err, '', {
            email: data.email,
            password: data.password,
          })
        )
      })
    return response
  } catch (error) {
    rejectWithValue(error)
    throw error
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.user_role = action.payload
      state.isLoggedIn = true
      saveToLocalStorage({
        state: { user_role: action.payload.user_role, isLoggedIn: true },
        key: Constants.LOCALSTORAGE_KEYS.PERSONNEL_AUTH,
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

    builder.addCase(fetchPersonnelProfile.fulfilled, (state, action) => {
      state.isLoading = false
      state.personnelProfile = action.payload
      saveToLocalStorage({
        state: { PersonnelProfile: action.payload },
        key: Constants.LOCALSTORAGE_KEYS.PERSONNEL_PROFILE,
      })
    })
    builder.addCase(fetchPersonnelProfile.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPersonnelProfile.rejected, (state) => {
      state.isLoading = false
      state.errorMessage = 'Failed to fetch profile'
    })

    builder.addCase(logoutPersonnel.fulfilled, () => {
      localStorage.removeItem(Constants.LOCALSTORAGE_KEYS.PERSONNEL_AUTH)
      localStorage.removeItem(Constants.LOCALSTORAGE_KEYS.PERSONNEL_PROFILE)
      window.location.href = Constants.ROUTES.AUTH.signin
    })
    builder.addCase(logoutPersonnel.pending, (state) => {
      state.isLogoutLoading = true
    })
    builder.addCase(logoutPersonnel.rejected, (state) => {
      state.isLoading = false
      state.errorMessage = 'Failed to logout'
    })
  },
})

export const authReducer = authSlice.reducer
