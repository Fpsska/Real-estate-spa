import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import {
    IcheckboxTemplates,
    IbuttonTemplates,
    IselectTemplates,
    Icards,
    IswitchButtonSelectedStatus,
    IsetFilteredQuartalData,
    IsetFilteredOptionData,
    IswitchCardActiveStatus
} from '../../types/filterSliceTypes';

// /. imports

interface filterSliceTypes {
    projectText: string;
    projectCount: number;
    roomCount: string;
    cards: Icards[];
    selectTemplates: any[];
    filteredQuartalData: any[];
    filteredSelectOptionsData: any[];
    checkboxInputs: IcheckboxTemplates[];
    filterButtonTemplates: IbuttonTemplates[];
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

    checkboxInputs: [
        {
            id: 1,
            labelText: '3 quarter 2023',
            isSelected: false
        },
        {
            id: 2,
            labelText: '4 quarter 2023',
            isSelected: false
        },
        {
            id: 3,
            labelText: '1 quarter 2024',
            isSelected: false
        },
        {
            id: 4,
            labelText: 'End of the year',
            isSelected: false
        }
    ],
    filterButtonTemplates: [
        {
            id: 1,
            text: 'Studio',
            isButtonSelected: true
        },
        {
            id: 2,
            text: '1',
            isButtonSelected: false
        },
        {
            id: 3,
            text: '2',
            isButtonSelected: false
        },
        {
            id: 4,
            text: '3+',
            isButtonSelected: false
        }
    ],

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
                const targetItem = state.cards.find(item => item.id === id);
                targetItem && (targetItem.isActive = true);
            } else if (quantity > 1) {
                const activeItems = state.cards.filter(item => item.isActive);
                activeItems.map(item => (item.isActive = false));
            }
        },
        switchCheckboxStatus(
            state,
            action: PayloadAction<{ id: number; status: boolean }>
        ) {
            const { id, status } = action.payload;
            // /. payload

            state.checkboxInputs.map(item =>
                item.id === id
                    ? (item.isSelected = status)
                    : (item.isSelected = false)
            );
        },

        setCurrentSortOpt(state, action: PayloadAction<{ sortOpt: string }>) {
            const { sortOpt } = action.payload;
            // /. payload

            state.currentSortOpt = sortOpt;
        },

        switchButtonSelectedStatus(
            state,
            action: PayloadAction<IswitchButtonSelectedStatus>
        ) {
            const { id, status } = action.payload;
            // /. payload

            state.filterButtonTemplates.map(item =>
                item.id === id
                    ? (item.isButtonSelected = status)
                    : (item.isButtonSelected = false)
            );
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
