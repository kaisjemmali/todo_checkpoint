import { createSlice } from "@reduxjs/toolkit";
import Data from "../Components/Data";

const todoSlice = createSlice({
  name: "todoslice",
  initialState: { tasks: Data },
  Filter: "All",

  reducers: {
    addTodo: (state, { payload }) => {
      state.tasks = [...state.tasks, payload];
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((el) => el.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.tasks = state.tasks.map((el) =>
        el.id === action.payload.id ? (el = action.payload.updatedTask) : el
      );
    },
    doneTodo: (state, action) => {
      state.tasks.map((el) =>
        el.id === action.payload ? (el.isDone = !el.isDone) : el.isDone
      );
    },
    filterAll: (state) => {
      state.Filter = "All";
    },
    filterDone: (state) => {
      state.Filter = "Done";
    },
    filterUndone: (state) => {
      state.Filter = "Undone";
    },

    clearAll: (state, action) => {
      state.tasks = state.tasks.filter((el) => el === action.payload);
    },
  },
});

export default todoSlice.reducer;
export const {
  addTodo,
  deleteTodo,
  updateTodo,
  doneTodo,
  filterAll,
  filterDone,
  filterUndone,
  clearAll,
} = todoSlice.actions;
