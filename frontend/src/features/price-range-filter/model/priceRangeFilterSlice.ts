import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// /. imports

type PriceRangeFilterState = {
    inputRangeMinValue: number;
    inputRangeMaxValue: number;
};

// /. interfaces

const initialState: PriceRangeFilterState = {
    inputRangeMinValue: 600_000,
    inputRangeMaxValue: 9_600_000
};

// /. initialState

const priceRangeFilterSlice = createSlice({
    name: 'priceRangeFilter',
    initialState,
    reducers: {
        setCurrentInputRangeMinValue(state, action: PayloadAction<number>) {
            state.inputRangeMinValue = action.payload;
        },
        setCurrentInputRangeMaxValue(state, action: PayloadAction<number>) {
            state.inputRangeMaxValue = action.payload;
        }
    }
});

// /. slice

export const { setCurrentInputRangeMinValue, setCurrentInputRangeMaxValue } =
    priceRangeFilterSlice.actions;

export default priceRangeFilterSlice.reducer;
