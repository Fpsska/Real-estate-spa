import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// /. imports

interface inputRangeSliceTypes {
    currentMinPrice: number;
    currentMaxPrice: number;
    inputRangeTotal: number;
    inputRangeMinValue: number;
    inputRangeMaxValue: number;
    priceGap: number;
}

// /. interfaces

const initialState: inputRangeSliceTypes = {
    currentMinPrice: 0,
    currentMaxPrice: 0,
    inputRangeTotal: 20000000,
    inputRangeMinValue: 600000,
    inputRangeMaxValue: 9600000,
    priceGap: 500000,
};

// /. initialState

const inputRangeSlice = createSlice({
    name: "inputRangeSlice",
    initialState,
    reducers: {
        setCurrentMinPrice(state, action: PayloadAction<number>) {
            state.currentMinPrice = action.payload;
        },
        setCurrentMaxPrice(state, action: PayloadAction<number>) {
            state.currentMaxPrice = action.payload;
        },
        setCurrentInputRangeMinValue(state, action: PayloadAction<number>) {
            state.inputRangeMinValue = action.payload;
        },
        setCurrentInputRangeMaxValue(state, action: PayloadAction<number>) {
            state.inputRangeMaxValue = action.payload;
        },
    },
});

export const {
    setCurrentMinPrice,
    setCurrentMaxPrice,
    setCurrentInputRangeMinValue,
    setCurrentInputRangeMaxValue,
} = inputRangeSlice.actions;

export default inputRangeSlice.reducer;
