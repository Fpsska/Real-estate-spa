import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// /. imports

type QuarterFilterState = {
    selectedCheckboxId: number | null;
    currentSortOpt: string;
};

// /. interfaces

const initialState: QuarterFilterState = {
    selectedCheckboxId: null,
    currentSortOpt: 'End of the year'
};

// /. initialState

const quarterFilterSlice = createSlice({
    name: 'quarterFilter',
    initialState,
    reducers: {
        switchCheckboxStatus(state, action: PayloadAction<number>) {
            state.selectedCheckboxId = action.payload;
        },
        setCurrentSortOpt(state, action: PayloadAction<{ sortOpt: string }>) {
            const { sortOpt } = action.payload;
            // /. payload

            state.currentSortOpt = sortOpt;
        }
    }
});

// /. slice

export const { switchCheckboxStatus, setCurrentSortOpt } =
    quarterFilterSlice.actions;

export default quarterFilterSlice.reducer;
