import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state,action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    refresh: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, refresh } = counterSlice.actions;

export default counterSlice.reducer;
