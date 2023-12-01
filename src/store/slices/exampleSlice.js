import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state, action) {
      state.value++;
    },
    decrement(state, action) {
      state.value--;
    },
  },
});
console.log("exampleSlice", counterSlice);
export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
