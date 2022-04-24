import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    mainSlice: mainSlice,
    filterSlice: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
