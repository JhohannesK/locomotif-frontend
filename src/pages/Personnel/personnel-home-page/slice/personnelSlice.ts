import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { activeNav: number } = {
  activeNav: 1,
}

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {
    setHomepage(state, action: PayloadAction<number>) {
      state.activeNav = action.payload
    },
  },
})

export const { setHomepage } = personnelSlice.actions
