import { configureStore } from '@reduxjs/toolkit';

import { cardsReducer, cardTemplatesAPI } from '../../entities/cards';

import { roomFilterReducer } from '../../features/room-filter';
import { quarterFilterReducer } from '../../features/quarter-filter';
import { priceRangeFilterReducer } from '../../features/price-range-filter';
import { burgerMenuReducer } from '../../features/toggle-burger-menu';

// /. imports

export const store = configureStore({
    reducer: {
        card: cardsReducer,
        roomFilter: roomFilterReducer,
        quarterFilter: quarterFilterReducer,
        priceRangeFilter: priceRangeFilterReducer,
        burgerMenu: burgerMenuReducer,
        [cardTemplatesAPI.reducerPath]: cardTemplatesAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cardTemplatesAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
