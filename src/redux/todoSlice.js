import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.todoList.push({
        id: state.todoList.length,
        text: action.payload,
        isActive: true,
      });
    },
    removeItem: (state, action) => {
      state.todoList = state.todoList.filter((i) => i.id != action.payload);
    },
    toggleItem: (state, action) => {
      state.todoList = state.todoList.map((i) => {
        if (i.id === action.payload) {
          return {
            ...i,
            isActive: !i.isActive,
          };
        } else {
          return i;
        }
      });
    },
  },
});

export const { addItem, removeItem, toggleItem } = todoSlice.actions;

export default todoSlice.reducer;
