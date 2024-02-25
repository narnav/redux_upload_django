import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/counter/taskSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task:taskReducer
  },
});
