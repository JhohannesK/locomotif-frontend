import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterRecordType } from '../../../../_shared/@types'

type InitialDataType = {
  speciality: FilterRecordType
  shifts: FilterRecordType
}

const initialState: InitialDataType = {
  speciality: {},
  shifts: {},
}

export const filterSlice = createSlice({
  name: 'filter_record',
  initialState,
  reducers: {
    setSpeciality(
      state,
      action: PayloadAction<{ key: number; value: boolean }>
    ) {
      state.speciality = {
        ...state.speciality,
        [action.payload.key]: action.payload.value,
      }
    },
    setShifts(state, action: PayloadAction<{ key: number; value: boolean }>) {
      state.shifts = {
        ...state.shifts,
        [action.payload.key]: action.payload.value,
      }
    },
  },
})

export const { setSpeciality, setShifts } = filterSlice.actions
