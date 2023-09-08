import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { todoType, contentType, setContentAPI } from "./todoAPI";

const initialState: todoType = {
  title: { name: "hi", content: 0 },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setContentAPI,
    reset: () => initialState,
    setTitle: (state, action: PayloadAction<contentType>) => {
      state.title.name = action.payload.name;
    },
  },
});

export const titles = (state: RootState) => state.todo.title;
export const { setTitle, reset } = todoSlice.actions;
export const setContent = todoSlice.actions.setContentAPI;
export default todoSlice.reducer;
