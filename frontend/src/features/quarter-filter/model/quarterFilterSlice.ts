import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// /. imports

type QuarterFilterState = {
    currentFilterOption: string;
};

// /. interfaces

const initialState: QuarterFilterState = {
    currentFilterOption: 'End of the year'
};

// /. initialState

const quarterFilterSlice = createSlice({
    name: 'quarterFilter',
    initialState,
    reducers: {
        setCurrentFilterOption(
            state,
            action: PayloadAction<{ filterOption: string }>
        ) {
            const { filterOption } = action.payload;
            // /. payload

            state.currentFilterOption = filterOption;
        }
    }
});

// /. slice

export const { setCurrentFilterOption } = quarterFilterSlice.actions;

export default quarterFilterSlice.reducer;
