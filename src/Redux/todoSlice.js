import { createSlice } from "@reduxjs/toolkit";
import Data from "../Components/Data";

const todoSlice = createSlice({
  name: "todoslice",
  initialState: { tasks: Data },
  reducers: {
    addTodo: (state, { payload }) => {
      state.tasks = [...state.tasks, payload];
    },
  },
});

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
