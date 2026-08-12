import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Icards, IswitchCardActiveStatus } from './types';

// /. imports

type CardState = {
    isDataLoading: boolean;
    projectText: string;
    projectCount: number;
    cards: Icards[];
    selectTemplates: any[];
    filteredQuartalData: any[];
    filteredSelectOptionsData: any[];
};

// /. interfaces

const initialState: CardState = {
    isDataLoading: true,
    projectText: 'projects',
    projectCount: 0,
    cards: [],
    selectTemplates: [],
    filteredQuartalData: [],
    filteredSelectOptionsData: []
};

// /. initialState

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        switchDataLoadingStatus(state, action: PayloadAction<boolean>) {
            state.isDataLoading = action.payload;
        },
        setCurrentProjectText(state, action: PayloadAction<string>) {
            state.projectText = action.payload;
        },
        setCurrentProjectCount(state, action: PayloadAction<number>) {
            state.projectCount = action.payload;
        },

        setCardsData(state, action: PayloadAction<Icards[]>) {
            state.cards = action.payload;
            state.filteredQuartalData = action.payload;
        },
        setSelectTemplatesData(state, action: PayloadAction<any[]>) {
            state.selectTemplates = action.payload;
        },

        switchCardActiveStatus(
            state,
            action: PayloadAction<IswitchCardActiveStatus>
        ) {
            const { id, quantity } = action.payload;
            // /. payload

            if (quantity === 1) {
                const targetItem = state.cards.find((item) => item.id === id);
                targetItem && (targetItem.isActive = true);
            } else if (quantity > 1) {
                const activeItems = state.cards.filter((item) => item.isActive);
                activeItems.map((item) => (item.isActive = false));
            }
        }
    }
});

// /. slice

export const {
    switchDataLoadingStatus,
    setCurrentProjectText,
    setCurrentProjectCount,
    setCardsData,
    setSelectTemplatesData,
    switchCardActiveStatus
} = cardsSlice.actions;

export default cardsSlice.reducer;
