import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { curr: 1, next: 2, prev: 0, sort: true };

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
    sortAsc(state) {
      state.sort = false;
    },
    sortDes(state) {
      state.sort = true;
    },
    restPage(state) {
      state.curr = 1;
      state.next = 2;
      state.prev = 0;
    },
  },
});

const store = configureStore({
  reducer: paginationSlice.reducer,
});
export const paginationActions = paginationSlice.actions;
export default store;
