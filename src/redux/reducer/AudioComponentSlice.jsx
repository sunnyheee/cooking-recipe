import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  volume: 0.3,
}

export const audioComponentSlice = createSlice({
  name: 'switchSound',
  initialState,
  reducers: {
    change: (state) => {
      state.value = !state.value
    },
    controlVolume : (state, action) => {
      state.volume = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { change, controlVolume } = audioComponentSlice.actions

export default audioComponentSlice.reducer