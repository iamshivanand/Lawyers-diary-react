import { createSlice } from "@reduxjs/toolkit";

const casesSlice = createSlice({
  name: "cases",
  initialState: {
    allCases: [],
    currentCase: {},
    currentPage: localStorage.getItem("currentPage") || "",
    editObject: {},
  },
  reducers: {
    addCase(state, action) {
      console.log("hello addcase", state, action.payload);
      //   state.allCases.push(action.payload);
      state.allCases.push(action?.payload);
    },
    showCurrentCase(state, action) {
      console.log("hello show current case", action);
      state.currentCase = action?.payload;
    },
    collectPage(state, action) {
      localStorage.setItem("currentPage", action?.payload);
      state.currentPage = action?.payload;
    },
    editCase(state, action) {
      state.editObject = action?.payload;
    },
    disposeCase(state, action) {},
    addStepAndNextHearingDate(state, action) {},
    caseHistory(state, action) {},
    caseNotes(state, action) {},
    shareCase(state, action) {},
  },
});

export default casesSlice.reducer;

export const { addCase, editCase, showCurrentCase, collectPage } =
  casesSlice.actions;
