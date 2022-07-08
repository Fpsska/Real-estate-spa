import { Injectable } from '@nestjs/common';

@Injectable()
export class CardTemplatesService {
  cards: any[];

  constructor() {
    this.cards = [
      {
        id: 'vyborgsky-template',
        equipment: 'Мебилировка зависит от сценария',
        suggestions: '134 предложения',
        image: 'project-1.jpg',
        complexName: 'ЖК Выборгский',
        subwayName: 'м. Московская',
        walkTime: '20 мин',
        wayMoving: 'walk',
        isActive: false,
        selectTemplates: [
          {
            id: 1,
            plateName: 'Участок 7',
            housingNumber: '3 корпус',
            quartalNumber: '3 квартал 2023',
            value: 4.74,
          },
          {
            id: 2,
            plateName: 'Участок 3',
            housingNumber: '4 корпус.',
            quartalNumber: '4 квартал 2023',
            value: 4.8,
          },
          {
            id: 3,
            plateName: 'Участок 13',
            housingNumber: '6 корпус.',
            quartalNumber: '1 квартал 2024',
            value: 4.84,
          },
          {
            id: 4,
            plateName: 'Участок 14',
            housingNumber: '2 корпус.',
            quartalNumber: '3 квартал 2024',
            value: 4.74,
          },
          {
            id: 5,
            plateName: 'Участок 13',
            housingNumber: '9 корпус.',
            quartalNumber: '3 квартал 2023',
            value: 2.74,
          },
          {
            id: 6,
            plateName: 'Участок 10',
            housingNumber: '3 корпус.',
            quartalNumber: 'Дом сдан',
            value: 2.74,
          },
          {
            id: 7,
            plateName: 'Участок 4',
            housingNumber: '6 корпус.',
            quartalNumber: '3 квартал 2023',
            value: 5.74,
          },
          {
            id: 8,
            plateName: 'Участок 11',
            housingNumber: '4 корпус.',
            quartalNumber: 'Дом сдан',
            value: 5.74,
          },
        ],
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
        isActive: false,
        selectTemplates: [
          {
            id: 9,
            plateName: 'Участок 6',
            housingNumber: '4 корпус',
            quartalNumber: '3 квартал 2023',
            value: 4.74,
          },
          {
            id: 10,
            plateName: 'Участок 7',
            housingNumber: '3 корпус',
            quartalNumber: '3 квартал 2023',
            value: 4.8,
          },
          {
            id: 11,
            plateName: 'Участок 8',
            housingNumber: '2 корпус',
            quartalNumber: '3 квартал 2023',
            value: 4.84,
          },
          {
            id: 12,
            plateName: 'Участок 14',
            housingNumber: '1 корпус.',
            quartalNumber: '1 квартал 2024',
            value: 4.74,
          },
          {
            id: 13,
            plateName: 'Участок 2',
            housingNumber: '6 корпус.',
            quartalNumber: '4 квартал 2024',
            value: 2.74,
          },
          {
            id: 14,
            plateName: 'Участок 5',
            housingNumber: '5 корпус.',
            quartalNumber: '3 квартал 2024',
            value: 2.74,
          },
          {
            id: 15,
            plateName: 'Участок 4',
            housingNumber: '2 корпус.',
            quartalNumber: 'Дом сдан',
            value: 5.74,
          },
          {
            id: 16,
            plateName: 'Участок 12',
            housingNumber: '2 корпус.',
            quartalNumber: 'Дом сдан',
            value: 5.74,
          },
        ],
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
        isActive: false,
        selectTemplates: [
          {
            id: 17,
            plateName: 'Участок 1',
            housingNumber: '9 корпус.',
            quartalNumber: '1 квартал 2024',
            value: 4.74,
          },
          {
            id: 18,
            plateName: 'Участок 4',
            housingNumber: '3 корпус.',
            quartalNumber: '4 квартал 2023',
            value: 4.8,
          },
          {
            id: 19,
            plateName: 'Участок 4',
            housingNumber: '6 корпус.',
            quartalNumber: '4 квартал 2024',
            value: 4.84,
          },
          {
            id: 20,
            plateName: 'Участок 1',
            housingNumber: '7 корпус.',
            quartalNumber: '1 квартал 2024',
            value: 4.74,
          },
          {
            id: 21,
            plateName: 'Участок 2',
            housingNumber: '5 корпус.',
            quartalNumber: '3 квартал 2024',
            value: 2.74,
          },
          {
            id: 22,
            plateName: 'Участок 5',
            housingNumber: '2 корпус.',
            quartalNumber: '3 квартал 2024',
            value: 2.74,
          },
          {
            id: 23,
            plateName: 'Участок 6',
            housingNumber: '1 корпус.',
            quartalNumber: '4 квартал 2023',
            value: 5.74,
          },
          {
            id: 24,
            plateName: 'Участок 3',
            housingNumber: '3 корпус.',
            quartalNumber: 'Дом сдан',
            value: 5.74,
          },
        ],
      },
    ];
  }

  async getCards() {
    return this.cards;
  }
}
