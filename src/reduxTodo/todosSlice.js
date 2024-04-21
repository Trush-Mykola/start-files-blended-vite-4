import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchTodos } from './todoOps';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    // addTodo(state, action) {
    //   state.items.push(action.payload);
    // },
    // deleteTodo(state, action) {
    //   const index = state.items.findIndex(item => item.id === action.payload);
    //   state.items.splice(index, 1);
    // },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(addTodo.rejected, handleRejected)
      .addCase(fetchTodos.rejected, handleRejected)
      .addCase(deleteTodo.rejected, handleRejected)
      .addCase(fetchTodos.pending, handlePending)
      .addCase(addTodo.pending, handlePending)
      .addCase(deleteTodo.pending, handlePending);
  },
});

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
export const { setFilter } = todosSlice.actions;

export const selectTodos = state => state.todos.items;
export const selectFilter = state => state.todos.filter;
export const selectIsLoading = state => state.todos.isLoading;

export default todosSlice.reducer;
