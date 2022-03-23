import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  buttonsTypes,
  cardsTypes,
  checkboxInputsTypes,
  selectTemplateTypes,
} from "../models/mainSliceTypes";

interface mainSliceTypes {
  currentMinPrice: number;
  currentMaxPrice: number;
  roomCount: string;
  projectText: string;
  projectCount: number;
  priceGap: number;
  inputRangeTotal: number;
  inputRangeMinValue: number;
  inputRangeMaxValue: number;
  isDataLoading: boolean;
  isDataFiltered: boolean;
  isBurgerOpened: boolean;
  isBurgerFixed: boolean;
  isProjectsUndefined: boolean;
  isSelectMenuEmpty: boolean;
  buttons: buttonsTypes[];
  cards: cardsTypes[];
  checkboxInputs: checkboxInputsTypes[];
  selectTemplate: selectTemplateTypes[];
  filteredQuartalData: selectTemplateTypes[];
  filteredSelectOptionsData: selectTemplateTypes[];
}

// interface actionPayloadTypes {
//   id: number;
//   index: number;
//   status: boolean;
//   attribute: string;
//   counterMinValue: number;
//   counterMaxValue: number;
//   data: selectTemplateTypes[];
// }

interface switchButtonSelectedStatusTypes {
  id: number;
  status: boolean;
}
interface setFilteredQuartalDataTypes {
  id: number;
  status: boolean;
  attribute: string;
  data: selectTemplateTypes[];
}
interface setFilteredOptionDataTypes {
  counterMinValue: number;
  counterMaxValue: number;
  data: selectTemplateTypes[];
}
interface switchCardActiveStatusTypes {
  index: number;
  status: boolean;
}

const initialState: mainSliceTypes = {
  currentMinPrice: 0,
  currentMaxPrice: 0,
  roomCount: "",
  projectText: "проектов",
  projectCount: 0,
  priceGap: 500000,
  inputRangeTotal: 20000000,
  inputRangeMinValue: 600000,
  inputRangeMaxValue: 9600000,
  isDataLoading: true,
  isDataFiltered: false,
  isBurgerOpened: false,
  isBurgerFixed: false,
  isProjectsUndefined: false,
  isSelectMenuEmpty: false,
  checkboxInputs: [
    {
      id: 0,
      labelText: "3 квартал 2023",
      isSelected: false,
    },
    {
      id: 1,
      labelText: "4 квартал 2023",
      isSelected: false,
    },
    {
      id: 2,
      labelText: "1 квартал 2024",
      isSelected: false,
    },
    {
      id: 3,
      labelText: "До конца года",
      isSelected: false,
    },
  ],
  filteredQuartalData: [],
  filteredSelectOptionsData: [],
  buttons: [
    {
      id: 0,
      text: "Студия",
      isButtonSelected: true,
    },
    {
      id: 1,
      text: "1",
      isButtonSelected: false,
    },
    {
      id: 2,
      text: "2",
      isButtonSelected: false,
    },
    {
      id: 3,
      text: "3+",
      isButtonSelected: false,
    },
  ],
  cards: [
    {
      id: "vyborgsky-template",
      equipment: "Мебилировка зависит от сценария",
      suggestions: "134 предложения",
      image: "project-1.jpg",
      complexName: "ЖК Выборгский",
      subwayName: "м. Московская",
      walkTime: "20 мин",
      wayMoving: "walk",
      isActive: false,
    },
    {
      id: "pantera-template",
      equipment: "",
      suggestions: "114 предложения",
      image: "project-2.jpg",
      complexName: "ЖК Партнера",
      subwayName: "м. Пионерская",
      walkTime: "35 мин",
      wayMoving: "walk",
      isActive: false,
    },
    {
      id: "egoist-template",
      equipment: "Мебилировка зависит от сценария",
      suggestions: "94 предложения",
      image: "project-3.jpg",
      complexName: "ЖК Эгоист",
      subwayName: "м. Беговая",
      walkTime: "15 мин",
      wayMoving: "car",
      isActive: false,
    },
  ],
  selectTemplate: [
    {
      id: 1,
      plateName: "Участок 1",
      housingNumber: "1 корпус",
      quartalNumber: "3 квартал 2023",
      value: 4.74,
    },
    {
      id: 2,
      plateName: "Участок 2",
      housingNumber: "1 корпус.",
      quartalNumber: "4 квартал 2023",
      value: 4.8,
    },
    {
      id: 3,
      plateName: "Участок 3",
      housingNumber: "1 корпус.",
      quartalNumber: "1 квартал 2024",
      value: 4.84,
    },
    {
      id: 4,
      plateName: "Участок 4",
      housingNumber: "1 корпус.",
      quartalNumber: "2 квартал 2024",
      value: 4.74,
    },
    {
      id: 5,
      plateName: "Участок 1",
      housingNumber: "1 корпус.",
      quartalNumber: "3 квартал 2023",
      value: 2.74,
    },
    {
      id: 6,
      plateName: "Участок 1",
      housingNumber: "1 корпус.",
      quartalNumber: "Дом сдан",
      value: 2.74,
    },
    {
      id: 7,
      plateName: "Участок 1",
      housingNumber: "1 корпус.",
      quartalNumber: "3 квартал 2023",
      value: 5.74,
    },
    {
      id: 8,
      plateName: "Участок 1",
      housingNumber: "1 корпус.",
      quartalNumber: "Дом сдан",
      value: 5.74,
    },
  ],
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    switchBurgerOpenedStatus(state, action: PayloadAction<boolean>) {
      state.isBurgerOpened = action.payload;
    },
    switchBurgerFixedStatus(state, action: PayloadAction<boolean>) {
      state.isBurgerFixed = action.payload;
    },
    switchButtonSelectedStatus(
      state,
      action: PayloadAction<switchButtonSelectedStatusTypes>
    ) {
      const { id, status } = action.payload;
      state.buttons.forEach((item) => (item.isButtonSelected = false));
      state.buttons[id].isButtonSelected = status;
    },
    setRoomCountValue(state, action: PayloadAction<string>) {
      state.roomCount = action.payload;
    },
    switchDataFilteredStatus(state, action: PayloadAction<boolean>) {
      state.isDataFiltered = action.payload;
    },
    setFilteredQuartalData(
      state,
      action: PayloadAction<setFilteredQuartalDataTypes>
    ) {
      const { data, id, status, attribute } = action.payload;
      state.checkboxInputs[id].isSelected = status;
      state.filteredQuartalData = data;
      state.selectTemplate = state.filteredQuartalData.filter((item) => {
        if (item.quartalNumber === attribute) {
          return item;
        }
        if (attribute === "До конца года" || !status) {
          return data;
        }
      });
    },
    setFilteredOptionData(
      state,
      action: PayloadAction<setFilteredOptionDataTypes>
    ) {
      const { data, counterMinValue, counterMaxValue } = action.payload;
      state.filteredSelectOptionsData = data;
      state.selectTemplate = state.filteredSelectOptionsData.filter(
        (item) => item.value > counterMinValue && item.value < counterMaxValue
      );
    },
    switchProjectsUndefinedStatus(state, action: PayloadAction<boolean>) {
      state.isProjectsUndefined = action.payload;
    },
    switchDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isDataLoading = action.payload;
    },
    setCurrentInputRangeMinValue(state, action: PayloadAction<number>) {
      state.inputRangeMinValue = action.payload;
    },
    setCurrentInputRangeMaxValue(state, action: PayloadAction<number>) {
      state.inputRangeMaxValue = action.payload;
    },
    setCurrentMinPrice(state, action: PayloadAction<number>) {
      state.currentMinPrice = action.payload;
    },
    setCurrentMaxPrice(state, action: PayloadAction<number>) {
      state.currentMaxPrice = action.payload;
    },
    setCurrentProjectText(state, action: PayloadAction<string>) {
      state.projectText = action.payload;
    },
    setCurrentProjectCount(state, action: PayloadAction<number>) {
      state.projectCount = action.payload;
    },
    switchSelectMenuStatus(state, action: PayloadAction<boolean>) {
      state.isSelectMenuEmpty = action.payload;
    },
    switchCardActiveStatus(
      state,
      action: PayloadAction<switchCardActiveStatusTypes>
    ) {
      const { index, status } = action.payload;
      state.cards.forEach((item) => (item.isActive = false));
      state.cards[index].isActive = status;
    },
  },
});

export const {
  switchBurgerOpenedStatus,
  switchBurgerFixedStatus,
  switchButtonSelectedStatus,
  setRoomCountValue,
  switchDataFilteredStatus,
  setFilteredQuartalData,
  setFilteredOptionData,
  switchProjectsUndefinedStatus,
  switchDataLoadingStatus,
  setCurrentInputRangeMinValue,
  setCurrentInputRangeMaxValue,
  setCurrentMinPrice,
  setCurrentMaxPrice,
  setCurrentProjectText,
  setCurrentProjectCount,
  switchSelectMenuStatus,
  switchCardActiveStatus,
} = mainSlice.actions;

export default mainSlice.reducer;
