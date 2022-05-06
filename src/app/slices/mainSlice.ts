import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// /. imports

interface mainSliceTypes {
  isDataLoading: boolean;
  isBurgerOpened: boolean;
  isBurgerFixed: boolean;
  isProjectsUndefined: boolean;
  isSelectMenuEmpty: boolean;
}

// /. interfaces

const initialState: mainSliceTypes = {
  isDataLoading: true,
  isBurgerOpened: false,
  isBurgerFixed: false,
  isProjectsUndefined: false,
  isSelectMenuEmpty: false
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
    },
    switchProjectsUndefinedStatus(state, action: PayloadAction<boolean>) {
      state.isProjectsUndefined = action.payload;
    },
    switchSelectMenuStatus(state, action: PayloadAction<boolean>) {
      state.isSelectMenuEmpty = action.payload;
    }
  }
});

export const {
  switchDataLoadingStatus,
  switchBurgerOpenedStatus,
  switchBurgerFixedStatus,
  switchProjectsUndefinedStatus,
  switchSelectMenuStatus
} = mainSlice.actions;

export default mainSlice.reducer;
