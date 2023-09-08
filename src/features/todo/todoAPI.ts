import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export type contentType = {
  name: string;
  content: number;
};

export type todoType = {
  title: contentType;
};

export const setContentAPI: CaseReducer<
  todoType,
  PayloadAction<contentType>
> = (state, action) => {
  ++state.title.content;
};
