import { configureStore } from '@reduxjs/toolkit';

import mainSlice from './slices/mainSlice';
import filterSlice from './slices/filterSlice';
import inputRangeSlice from './slices/inputRangeSlice';

// /. imports

export const store = configureStore({
  reducer: {
    mainSlice: mainSlice,
    filterSlice: filterSlice,
    inputRangeSlice: inputRangeSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

