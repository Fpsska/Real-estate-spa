import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// /. imports

type BurgerMenuState = {
    isBurgerOpened: boolean;
    isBurgerFixed: boolean;
};

// /. interfaces

const initialState: BurgerMenuState = {
    isBurgerOpened: false,
    isBurgerFixed: false
};

// /. initialState

const burgerMenuSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        switchBurgerOpenedStatus(state, action: PayloadAction<boolean>) {
            state.isBurgerOpened = action.payload;
        },
        switchBurgerFixedStatus(state, action: PayloadAction<boolean>) {
            state.isBurgerFixed = action.payload;
        }
    }
});

// /. slice

export const { switchBurgerOpenedStatus, switchBurgerFixedStatus } =
    burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;
