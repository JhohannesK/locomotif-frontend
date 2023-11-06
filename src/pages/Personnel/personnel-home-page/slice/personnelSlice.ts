import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { isChecked: boolean } = {
  isChecked: false,
}

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {
    setIsChecked(state, action: PayloadAction<boolean>) {
      state.isChecked = action.payload
    },
  },
})

export const { setIsChecked } = personnelSlice.actions
