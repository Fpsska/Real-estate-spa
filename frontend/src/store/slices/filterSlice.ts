import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Icards, IswitchCardActiveStatus } from '../../types/filterSliceTypes';

// /. imports

interface filterSliceTypes {
    projectText: string;
    projectCount: number;
    roomCount: string;
    cards: Icards[];
    selectTemplates: any[];
    filteredQuartalData: any[];
    filteredSelectOptionsData: any[];
    selectedCheckboxId: number | null;
    selectedButtonId: number;
    currentSortOpt: string;
}

// /. interfaces

const initialState: filterSliceTypes = {
    projectText: 'projects',
    projectCount: 0,
    roomCount: '',
    cards: [],
    selectTemplates: [],

    filteredQuartalData: [],
    filteredSelectOptionsData: [],

    selectedCheckboxId: null,
    selectedButtonId: 1,

    currentSortOpt: 'End of the year'
};

// /. initialState

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setCurrentProjectText(state, action: PayloadAction<string>) {
            state.projectText = action.payload;
        },
        setCurrentProjectCount(state, action: PayloadAction<number>) {
            state.projectCount = action.payload;
        },
        setRoomCountValue(state, action: PayloadAction<string>) {
            // ButtonList.tsx
            state.roomCount = action.payload;
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
        },
        switchCheckboxStatus(state, action: PayloadAction<number>) {
            state.selectedCheckboxId = action.payload;
        },

        setCurrentSortOpt(state, action: PayloadAction<{ sortOpt: string }>) {
            const { sortOpt } = action.payload;
            // /. payload

            state.currentSortOpt = sortOpt;
        },

        switchButtonSelectedStatus(state, action: PayloadAction<number>) {
            state.selectedButtonId = action.payload;
        }
    }
});

// /. slice

export const {
    setCurrentProjectText,
    setCurrentProjectCount,
    setRoomCountValue,

    setCardsData,
    setSelectTemplatesData,
    setCurrentSortOpt,

    switchCardActiveStatus,
    switchCheckboxStatus,
    switchButtonSelectedStatus
} = filterSlice.actions;

export default filterSlice.reducer;
