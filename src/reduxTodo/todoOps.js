import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://637785ab81a568fc2518138f.mockapi.io/api',
});
export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (newTodo, thunkApi) => {
    try {
      const response = await instance.post('/todos', newTodo);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId, thunkApi) => {
    try {
      await instance.delete(`/todos/${todoId}`);
      return todoId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/todos');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
