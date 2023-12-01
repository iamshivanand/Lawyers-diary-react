import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/exampleSlice";
import casesSlice from "./slices/casesSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cases: casesSlice,
  },
});

export default store;
