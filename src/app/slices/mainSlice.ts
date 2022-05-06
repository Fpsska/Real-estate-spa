import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { navLinkTypes } from '../../Types/mainSliceTypes';

// /. imports

interface mainSliceTypes {
  isDataLoading: boolean;
  isBurgerOpened: boolean;
  isBurgerFixed: boolean;
  isProjectsUndefined: boolean;
  isSelectMenuEmpty: boolean;
  navLinks: navLinkTypes[]
}

// /. interfaces

const initialState: mainSliceTypes = {
  isDataLoading: true,
  isBurgerOpened: false,
  isBurgerFixed: false,
  isProjectsUndefined: false,
  isSelectMenuEmpty: false,
  navLinks: [
    {
      id: 1,
      text: 'Ипотека',
      link: ''
    },
    {
      id: 2,
      text: 'О группе компаний',
      link: ''
    },
    {
      id: 3,
      text: 'Новости и акции',
      link: ''
    },
    {
      id: 4,
      text: 'Тендеры',
      link: ''
    },
    {
      id: 5,
      text: 'Коммерческие помещения',
      link: ''
    },
    {
      id: 6,
      text: 'Контакты',
      link: ''
    }
  ]
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
