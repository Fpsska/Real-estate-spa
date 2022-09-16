import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InavLinkTemplates } from '../../Types/mainSliceTypes';

// /. imports

interface mainSliceTypes {
  isDataLoading: boolean;
  isBurgerOpened: boolean;
  isBurgerFixed: boolean;
  isSelectMenuEmpty: boolean;
  navLinks: InavLinkTemplates[];
  GOCdataTemplates: InavLinkTemplates[];
  partnersDataTemplates: InavLinkTemplates[];
  socialDataTemplates: InavLinkTemplates[];
  mainInfoDataTemplates: InavLinkTemplates[]
}

// /. interfaces

const initialState: mainSliceTypes = {
  isDataLoading: true,
  isBurgerOpened: false,
  isBurgerFixed: false,
  isSelectMenuEmpty: false,
  navLinks: [
    {
      id: 1,
      text: 'Mortgage',
      link: '#'
    },
    {
      id: 2,
      text: 'About the group of companies',
      link: '#'
    },
    {
      id: 3,
      text: 'News and promotions',
      link: '#'
    },
    {
      id: 4,
      text: 'Tenders',
      link: '#'
    },
    {
      id: 5,
      text: 'Commercial premises',
      link: '#'
    },
    {
      id: 6,
      text: 'Contacts',
      link: '#'
    }
  ],
  GOCdataTemplates: [
    {
      id: 1,
      text: 'RC Duet',
      link: '#'
    },
    {
      id: 2,
      text: 'RC Epsilon',
      link: '#'
    },
    {
      id: 3,
      text: 'RC ETA',
      link: '#'
    },
    {
      id: 4,
      text: 'RC Cosy',
      link: '#'
    }
  ],
  partnersDataTemplates: [
    {
      id: 1,
      text: 'RC Egoist',
      link: '#'
    },
    {
      id: 2,
      text: 'RC Vyborgsky',
      link: '#'
    },
    {
      id: 3,
      text: 'RC Panther',
      link: '#'
    }
  ],
  socialDataTemplates: [
    {
      id: 1,
      text: 'vkontakte',
      link: '#'
    },
    {
      id: 2,
      text: 'facebook',
      link: '#'
    },
    {
      id: 3,
      text: 'instagram',
      link: '#'
    },
    {
      id: 4,
      text: 'youtube',
      link: '#'
    }
  ],
  mainInfoDataTemplates: [
    {
      id: 1,
      text: 'About company',
      link: '#'
    },
    {
      id: 2,
      text: 'Press releases',
      link: '#'
    },
    {
      id: 3,
      text: 'Contacts',
      link: '#'
    },
    {
      id: 4,
      text: 'Tenders',
      link: '#'
    },
    {
      id: 5,
      text: 'Commercial premises',
      link: '#'
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
    switchSelectMenuStatus(state, action: PayloadAction<boolean>) {
      state.isSelectMenuEmpty = action.payload;
    }
  }
});

// /. slice

export const {
  switchDataLoadingStatus,
  switchBurgerOpenedStatus,
  switchBurgerFixedStatus,
  switchSelectMenuStatus
} = mainSlice.actions;

export default mainSlice.reducer;
