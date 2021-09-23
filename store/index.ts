import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { curr: 1, next: 2, prev: 0 };

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage(state) {
      state.curr = state.curr + 1;
      state.next = state.next + 1;
      state.prev = state.prev + 1;
    },
    prevPage(state) {
      state.curr = state.curr - 1;
      state.next = state.next - 1;
      state.prev = state.prev - 1;
    },
  },
});

const store = configureStore({
  reducer: paginationSlice.reducer,
});
export const paginationActions = paginationSlice.actions;
export default store;
