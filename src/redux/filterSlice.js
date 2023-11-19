import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterReducer(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterReducer } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
export const hendleFiltration = (state) => state.filter.filter;
