import { configureStore } from '@reduxjs/toolkit';

import mainSlice from './slices/mainSlice';
import filterSlice from './slices/filterSlice';
import inputRangeSlice from './slices/inputRangeSlice';

import { cardTemplatesAPI } from './api/card-templatesAPI';

// /. imports

export const store = configureStore({
  reducer: {
    mainSlice: mainSlice,
    filterSlice: filterSlice,
    inputRangeSlice: inputRangeSlice,
    [cardTemplatesAPI.reducerPath]: cardTemplatesAPI.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cardTemplatesAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
