import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
    // todos: [{ id: nanoid(), text: "Learn Redux Toolkit" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const toAdd = { id: nanoid(), text: action.payload.text };
      state.todos.push(toAdd);
    },
    removeTodo: (state, action) => {
      const filteredTodos = state.todos.filter(
        (x) => x.id !== action.payload.id
      );
      state.todos = filteredTodos;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((x) => {
        if (x.id === id) {
          x.text = text;
        }
        return x;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;