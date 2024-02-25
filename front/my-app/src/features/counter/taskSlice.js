import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addTask } from './taskAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const addTaskAsync = createAsyncThunk(
  'task/addTask',
  async (formData) => {
    // console.log(formData);
    const response = await addTask(formData);
    return response.data;
  }
);

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTaskAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment} = taskSlice.actions;
export const selectCount = (state) => state.task.value;
export default taskSlice.reducer;
