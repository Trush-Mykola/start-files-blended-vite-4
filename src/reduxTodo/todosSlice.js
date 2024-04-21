import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    deleteTodo(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, setFilter } = todosSlice.actions;

export const selectTodos = state => state.todos.items;
export const selectFilter = state => state.todos.filter;

export default todosSlice.reducer;
