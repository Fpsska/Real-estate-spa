import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import {
    checkboxInputsTypes,
    buttonsTypes,
    selectTemplatesTypes,
    cardsTypes,
    switchButtonSelectedStatusTypes,
    setFilteredQuartalDataTypes,
    setFilteredOptionDataTypes,
    switchCardActiveStatusTypes
} from '../../Types/filterSliceTypes';

// /. imports

interface filterSliceTypes {
    projectText: string;
    projectCount: number;
    roomCount: string;
    cards: cardsTypes[];
    selectTemplates: any[];
    filteredQuartalData: selectTemplatesTypes[];
    filteredSelectOptionsData: cardsTypes[];
    checkboxInputs: checkboxInputsTypes[];
    buttons: buttonsTypes[];
}

// /. interfaces

const initialState: filterSliceTypes = {
    projectText: 'проектов',
    projectCount: 0,
    roomCount: '',
    cards: [],
    selectTemplates: [],

    filteredQuartalData: [],
    filteredSelectOptionsData: [],

    checkboxInputs: [
        {
            id: 1,
            labelText: '3 квартал 2023',
            isSelected: false
        },
        {
            id: 2,
            labelText: '4 квартал 2023',
            isSelected: false
        },
        {
            id: 3,
            labelText: '1 квартал 2024',
            isSelected: false
        },
        {
            id: 4,
            labelText: 'До конца года',
            isSelected: false
        }
    ],
    buttons: [
        {
            id: 1,
            text: 'Студия',
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
    ]
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
        setRoomCountValue(state, action: PayloadAction<string>) { // ButtonList.tsx
            state.roomCount = action.payload;
        },

        setCardsData(state, action: PayloadAction<cardsTypes[]>) {
            state.cards = action.payload;
        },

        switchCardActiveStatus(
            state,
            action: PayloadAction<switchCardActiveStatusTypes>
        ) {
            const { index, status } = action.payload;

            state.cards.forEach((item) => (item.isActive = false));
            state.cards[index].isActive = status;
        },
        setFilteredQuartalData(
            state,
            action: PayloadAction<any>
        ) {
            const { data, id, status, attribute } = action.payload;

            state.checkboxInputs.forEach(item => item.id === id ? item.isSelected = status : item.isSelected = false);

            state.filteredQuartalData = data;

            state.cards.map(item => item.selectTemplates.filter((item) => {
                if (item.quartalNumber === attribute) {
                    console.log(current(item))
                    return item;
                }
                else if (attribute === 'До конца года' || !status) {
                    return state.selectTemplates;
                }
            }));

        },
        setFilteredOptionData(
            state,
            action: PayloadAction<setFilteredOptionDataTypes>
        ) {
            const { data, priceMinCounter, priceMaxCounter } = action.payload;

            // state.filteredSelectOptionsData = data;

            // state.cards = state.filteredSelectOptionsData.filter(
            //     (item: any) => item.selectTemplates.value > priceMinCounter && item.selectTemplates.value < priceMaxCounter
            // );
        },
        switchButtonSelectedStatus(
            state,
            action: PayloadAction<switchButtonSelectedStatusTypes>
        ) {
            const { id, status } = action.payload;
            state.buttons.forEach(item => item.id === id ? item.isButtonSelected = status : item.isButtonSelected = false);
        }
    }
});

export const {
    setCurrentProjectText,
    setCurrentProjectCount,
    setRoomCountValue,

    setCardsData,

    switchCardActiveStatus,
    setFilteredQuartalData,
    setFilteredOptionData,
    switchButtonSelectedStatus
} = filterSlice.actions;

export default filterSlice.reducer;
