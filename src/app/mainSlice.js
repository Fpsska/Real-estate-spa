import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    isBurgerOpened: false,
    isBurgerFixed: false,
    roomCount: "",
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
            description: "1 корпус. 3 квартал 2023",
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
            description: "1 корпус. 4 квартал 2023",
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
            description: "1 корпус. 1 квартал 2024",
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
            description: "1 корпус. 2 квартал 2024",
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
          // {
          //   id: 5,
          //   plateName: "Участок 4",
          //   description: "1 корпус. 2 квартал 2024",
          //   selectOptions: [
          //     {
          //       id: 1,
          //       value: "от 4.74 млн. ₽",
          //     },
          //     {
          //       id: 2,
          //       value: "от 4.80 млн. ₽",
          //     },
          //     {
          //       id: 3,
          //       value: "от 4.94 млн. ₽",
          //     },
          //     {
          //       id: 4,
          //       value: "от 4.98 млн. ₽",
          //     },
          //   ],
          // },
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
            id: 1,
            plateName: "Участок 1",
            description: "1 корпус. 3 квартал 2023",
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
            id: 2,
            plateName: "Участок 1",
            description: "1 корпус. Дом сдан",
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
            id: 1,
            plateName: "Участок 1",
            description: "1 корпус. 3 квартал 2023",
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
            id: 2,
            plateName: "Участок 1",
            description: "1 корпус. Дом сдан",
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
  },
});

export const {
  switchBurgerOpenedStatus,
  switchBurgerFixedStatus,
  switchButtonSelectedStatus,
  setRoomCountValue,
} = mainSlice.actions;

export default mainSlice.reducer;
