import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// /. imports

interface mainSliceTypes {
    isDataLoading: boolean;
    isBurgerOpened: boolean;
    isBurgerFixed: boolean;
}

// /. interfaces

const initialState: mainSliceTypes = {
    isDataLoading: true,
    isBurgerOpened: false,
    isBurgerFixed: false
};

// /. initialState

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        switchDataLoadingStatus(state, action: PayloadAction<boolean>) {
            state.isDataLoading = action.payload;
        },
        switchBurgerOpenedStatus(state, action: PayloadAction<boolean>) {
            state.isBurgerOpened = action.payload;
        },
        switchBurgerFixedStatus(state, action: PayloadAction<boolean>) {
            state.isBurgerFixed = action.payload;
        }
    }
});

// /. slice

export const {
    switchDataLoadingStatus,
    switchBurgerOpenedStatus,
    switchBurgerFixedStatus
} = mainSlice.actions;

export default mainSlice.reducer;
