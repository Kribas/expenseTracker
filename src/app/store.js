import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
