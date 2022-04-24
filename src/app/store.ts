import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import filterSlice from "./slices/filterSlice";
import inputRangeSlice from "./slices/inputRangeSlice";

export const store = configureStore({
  reducer: {
    mainSlice: mainSlice,
    filterSlice: filterSlice,
    inputRangeSlice: inputRangeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
