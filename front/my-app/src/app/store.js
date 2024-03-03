import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/counter/taskSlice';
import loginReducer from '../features/counter/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task:taskReducer,
    login:loginReducer
  },
});
