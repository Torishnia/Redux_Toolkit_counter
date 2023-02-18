import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      state.counter += 1
    },
    decremented: state => {
      state.counter -= 1
    },
  }
})

export const counterSelector = {
  getCounter: (state) => state.counter,
}

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice;