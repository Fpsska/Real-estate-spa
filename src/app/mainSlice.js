import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    isDataFiltered: false,
    isBurgerOpened: false,
    isBurgerFixed: false,
    roomCount: "",
    checkboxInputs: [
      {
        id: "0",
        labelText: "3 квартал 2023",
        attrValue: "1",
        isSelected: false,
      },
      {
        id: "1",
        labelText: "4 квартал 2023",
        attrValue: "3",
        isSelected: false,
      },
      {
        id: "2",
        labelText: "1 квартал 2024",
        attrValue: "2",
        isSelected: false,
      },
      {
        id: "3",
        labelText: "До конца года",
        attrValue: "full",
        isSelected: false,
      },
    ],
    filteredQuartalData: [],
    buttons: [
      {
        id: "0",
        text: "Студия",
        isButtonSelected: true,
      },
      {
        id: "1",
        text: "1",
        isButtonSelected: false,
      },
      {
        id: "2",
        text: "2",
        isButtonSelected: false,
      },
      {
        id: "3",
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
        isActive: true,
        selectTemplate: [
          {
            id: 1,
            plateName: "Участок 1",
            housingNumber: "1 корпус",
            quartalNumber: "3 квартал 2023",
            selectOptions: [
              {
                id: 1,
                value: "от 4.74 млн. ₽",
              },
              {
                id: 2,
                value: "от 4.80 млн. ₽",
              },
              {
                id: 3,
                value: "от 4.94 млн. ₽",
              },
              {
                id: 4,
                value: "от 4.98 млн. ₽",
              },
            ],
          },
          {
            id: 2,
            plateName: "Участок 2",
            housingNumber: "1 корпус.",
            quartalNumber: "4 квартал 2023",
            selectOptions: [
              {
                id: 1,
                value: "от 4.74 млн. ₽",
              },
              {
                id: 2,
                value: "от 4.80 млн. ₽",
              },
              {
                id: 3,
                value: "от 4.94 млн. ₽",
              },
              {
                id: 4,
                value: "от 4.98 млн. ₽",
              },
            ],
          },
          {
            id: 3,
            plateName: "Участок 3",
            housingNumber: "1 корпус.",
            quartalNumber: "1 квартал 2024",
            selectOptions: [
              {
                id: 1,
                value: "от 4.74 млн. ₽",
              },
              {
                id: 2,
                value: "от 4.80 млн. ₽",
              },
              {
                id: 3,
                value: "от 4.94 млн. ₽",
              },
              {
                id: 4,
                value: "от 4.98 млн. ₽",
              },
            ],
          },
          {
            id: 4,
            plateName: "Участок 4",
            housingNumber: "1 корпус.",
            quartalNumber: "2 квартал 2024",
            selectOptions: [
              {
                id: 1,
                value: "от 4.74 млн. ₽",
              },
              {
                id: 2,
                value: "от 4.80 млн. ₽",
              },
              {
                id: 3,
                value: "от 4.94 млн. ₽",
              },
              {
                id: 4,
                value: "от 4.98 млн. ₽",
              },
            ],
          },
        ],
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
        selectTemplate: [
          {
            id: 5,
            plateName: "Участок 1",
            housingNumber: "1 корпус.",
            quartalNumber: "3 квартал 2023",
            selectOptions: [
              {
                id: 1,
                value: "от 2.74 млн. ₽",
              },
              {
                id: 2,
                value: "от 2.80 млн. ₽",
              },
              {
                id: 3,
                value: "от 2.84 млн. ₽",
              },
            ],
          },
          {
            id: 6,
            plateName: "Участок 1",
            housingNumber: "1 корпус.",
            quartalNumber: "Дом сдан",
            selectOptions: [
              {
                id: 1,
                value: "от 2.74 млн. ₽",
              },
              {
                id: 2,
                value: "от 2.80 млн. ₽",
              },
              {
                id: 3,
                value: "от 2.84 млн. ₽",
              },
            ],
          },
        ],
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
        selectTemplate: [
          {
            id: 7,
            plateName: "Участок 1",
            housingNumber: "1 корпус.",
            quartalNumber: "3 квартал 2023",
            selectOptions: [
              {
                id: 1,
                value: "от 5.74 млн. ₽",
              },
              {
                id: 2,
                value: "от 5.80 млн. ₽",
              },
            ],
          },
          {
            id: 8,
            plateName: "Участок 1",
            housingNumber: "1 корпус.",
            quartalNumber: "Дом сдан",
            selectOptions: [
              {
                id: 1,
                value: "от 5.74 млн. ₽",
              },
              {
                id: 2,
                value: "от 5.80 млн. ₽",
              },
            ],
          },
        ],
      },
    ],
    selectTemplate: [
      {
        id: 1,
        plateName: "Участок 1",
        housingNumber: "1 корпус",
        quartalNumber: "3 квартал 2023",
        selectOptions: [
          {
            id: 1,
            value: "от 4.74 млн. ₽",
          },
          {
            id: 2,
            value: "от 4.80 млн. ₽",
          },
          {
            id: 3,
            value: "от 4.94 млн. ₽",
          },
          {
            id: 4,
            value: "от 4.98 млн. ₽",
          },
        ],
      },
      {
        id: 2,
        plateName: "Участок 2",
        housingNumber: "1 корпус.",
        quartalNumber: "4 квартал 2023",
        selectOptions: [
          {
            id: 1,
            value: "от 4.74 млн. ₽",
          },
          {
            id: 2,
            value: "от 4.80 млн. ₽",
          },
          {
            id: 3,
            value: "от 4.94 млн. ₽",
          },
          {
            id: 4,
            value: "от 4.98 млн. ₽",
          },
        ],
      },
      {
        id: 3,
        plateName: "Участок 3",
        housingNumber: "1 корпус.",
        quartalNumber: "1 квартал 2024",
        selectOptions: [
          {
            id: 1,
            value: "от 4.74 млн. ₽",
          },
          {
            id: 2,
            value: "от 4.80 млн. ₽",
          },
          {
            id: 3,
            value: "от 4.94 млн. ₽",
          },
          {
            id: 4,
            value: "от 4.98 млн. ₽",
          },
        ],
      },
      {
        id: 4,
        plateName: "Участок 4",
        housingNumber: "1 корпус.",
        quartalNumber: "2 квартал 2024",
        selectOptions: [
          {
            id: 1,
            value: "от 4.74 млн. ₽",
          },
          {
            id: 2,
            value: "от 4.80 млн. ₽",
          },
          {
            id: 3,
            value: "от 4.94 млн. ₽",
          },
          {
            id: 4,
            value: "от 4.98 млн. ₽",
          },
        ],
      },
      {
        id: 5,
        plateName: "Участок 1",
        housingNumber: "1 корпус.",
        quartalNumber: "3 квартал 2023",
        selectOptions: [
          {
            id: 1,
            value: "от 2.74 млн. ₽",
          },
          {
            id: 2,
            value: "от 2.80 млн. ₽",
          },
          {
            id: 3,
            value: "от 2.84 млн. ₽",
          },
        ],
      },
      {
        id: 6,
        plateName: "Участок 1",
        housingNumber: "1 корпус.",
        quartalNumber: "Дом сдан",
        selectOptions: [
          {
            id: 1,
            value: "от 2.74 млн. ₽",
          },
          {
            id: 2,
            value: "от 2.80 млн. ₽",
          },
          {
            id: 3,
            value: "от 2.84 млн. ₽",
          },
        ],
      },
      {
        id: 7,
        plateName: "Участок 1",
        housingNumber: "1 корпус.",
        quartalNumber: "3 квартал 2023",
        selectOptions: [
          {
            id: 1,
            value: "от 5.74 млн. ₽",
          },
          {
            id: 2,
            value: "от 5.80 млн. ₽",
          },
        ],
      },
      {
        id: 8,
        plateName: "Участок 1",
        housingNumber: "1 корпус.",
        quartalNumber: "Дом сдан",
        selectOptions: [
          {
            id: 1,
            value: "от 5.74 млн. ₽",
          },
          {
            id: 2,
            value: "от 5.80 млн. ₽",
          },
        ],
      },
    ],
  },
  reducers: {
    switchBurgerOpenedStatus(state, action) {
      state.isBurgerOpened = action.payload;
    },
    switchBurgerFixedStatus(state, action) {
      state.isBurgerFixed = action.payload;
    },
    switchButtonSelectedStatus(state, action) {
      const { id, status } = action.payload;
      if (id) {
        state.buttons.forEach((el) => (el.isButtonSelected = false));
      }
      state.buttons[id].isButtonSelected = status;
    },
    setRoomCountValue(state, action) {
      state.roomCount = action.payload;
    },
    switchDataFilteredStatus(state, action) {
      state.isDataFiltered = action.payload;
    },
    setFilteredQuartalData(state, action) {
      const { filteredData, id, status } = action.payload;
      console.log(filteredData);
      state.checkboxInputs[id].isSelected = status;
      state.filteredQuartalData.push(filteredData);
      state.filteredQuartalData.map((item) => (state.selectTemplate = item));
      // console.log("filteredQuartalData / ", current(state.filteredQuartalData));
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
} = mainSlice.actions;

export default mainSlice.reducer;
