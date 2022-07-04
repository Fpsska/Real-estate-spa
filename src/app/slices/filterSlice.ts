import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    checkboxInputsTypes,
    buttonsTypes,
    selectTemplateTypes,
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
    isDataFiltered: boolean;
    cards: cardsTypes[];
    selectTemplate: selectTemplateTypes[];
    filteredQuartalData: selectTemplateTypes[];
    filteredSelectOptionsData: selectTemplateTypes[];
    checkboxInputs: checkboxInputsTypes[];
    buttons: buttonsTypes[];
}

// /. interfaces

const initialState: filterSliceTypes = {
    projectText: 'проектов',
    projectCount: 0,
    roomCount: '',
    isDataFiltered: false,
    cards: [
        {
            id: 'vyborgsky-template',
            equipment: 'Мебилировка зависит от сценария',
            suggestions: '134 предложения',
            image: 'project-1.jpg',
            complexName: 'ЖК Выборгский',
            subwayName: 'м. Московская',
            walkTime: '20 мин',
            wayMoving: 'walk',
            isActive: false
        },
        {
            id: 'pantera-template',
            equipment: '',
            suggestions: '114 предложения',
            image: 'project-2.jpg',
            complexName: 'ЖК Партнера',
            subwayName: 'м. Пионерская',
            walkTime: '35 мин',
            wayMoving: 'walk',
            isActive: false
        },
        {
            id: 'egoist-template',
            equipment: 'Мебилировка зависит от сценария',
            suggestions: '94 предложения',
            image: 'project-3.jpg',
            complexName: 'ЖК Эгоист',
            subwayName: 'м. Беговая',
            walkTime: '15 мин',
            wayMoving: 'car',
            isActive: false
        }
    ],
    selectTemplate: [
        {
            id: 1,
            plateName: 'Участок 1',
            housingNumber: '1 корпус',
            quartalNumber: '3 квартал 2023',
            value: 4.74
        },
        {
            id: 2,
            plateName: 'Участок 2',
            housingNumber: '1 корпус.',
            quartalNumber: '4 квартал 2023',
            value: 4.8
        },
        {
            id: 3,
            plateName: 'Участок 3',
            housingNumber: '1 корпус.',
            quartalNumber: '1 квартал 2024',
            value: 4.84
        },
        {
            id: 4,
            plateName: 'Участок 4',
            housingNumber: '1 корпус.',
            quartalNumber: '2 квартал 2024',
            value: 4.74
        },
        {
            id: 5,
            plateName: 'Участок 1',
            housingNumber: '1 корпус.',
            quartalNumber: '3 квартал 2023',
            value: 2.74
        },
        {
            id: 6,
            plateName: 'Участок 1',
            housingNumber: '1 корпус.',
            quartalNumber: 'Дом сдан',
            value: 2.74
        },
        {
            id: 7,
            plateName: 'Участок 1',
            housingNumber: '1 корпус.',
            quartalNumber: '3 квартал 2023',
            value: 5.74
        },
        {
            id: 8,
            plateName: 'Участок 1',
            housingNumber: '1 корпус.',
            quartalNumber: 'Дом сдан',
            value: 5.74
        }
    ],

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
        switchDataFilteredStatus(state, action: PayloadAction<boolean>) {
            state.isDataFiltered = action.payload;
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
            action: PayloadAction<setFilteredQuartalDataTypes>
        ) {
            const { data, id, status, attribute } = action.payload;

            state.checkboxInputs.forEach(item => item.id === id ? item.isSelected = status : item.isSelected = false);

            state.filteredQuartalData = data; // [] by default

            state.selectTemplate = state.filteredQuartalData.filter((item) => {
                if (item.quartalNumber === attribute) {
                    return item;
                }
                else if (attribute === 'До конца года' || !status) {
                    return state.selectTemplate;
                }
            });
        },
        setFilteredOptionData(
            state,
            action: PayloadAction<setFilteredOptionDataTypes>
        ) {
            const { data, priceMinCounter, priceMaxCounter } = action.payload;

            state.filteredSelectOptionsData = data;

            state.selectTemplate = state.filteredSelectOptionsData.filter(
                (item) => item.value > priceMinCounter && item.value < priceMaxCounter
            );
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
    switchDataFilteredStatus,
    switchCardActiveStatus,
    setFilteredQuartalData,
    setFilteredOptionData,
    switchButtonSelectedStatus
} = filterSlice.actions;

export default filterSlice.reducer;
