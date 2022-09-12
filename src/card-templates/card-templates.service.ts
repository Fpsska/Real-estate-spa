import { Injectable } from '@nestjs/common';

@Injectable()
export class CardTemplatesService {
  cards: any[];

  constructor() {
    this.cards = [
      {
        id: 'vyborgsky-template',
        equipment: 'Furnishing depends on scenario',
        suggestions: '134 suggestions',
        image: 'project-1.jpg',
        complexName: 'RC Vyborgsky',
        subwayName: 'sw. Moskovskaya',
        walkTime: '20 min.',
        wayMoving: 'walk',
        isActive: false,
        selectTemplates: [
          {
            id: 1,
            ploteName: 'Plot 7',
            housingNumber: '3 building.',
            quartalNumber: '3 quarter 2023',
            value: [
              {
                id: 1,
                value: 3.54,
              },
              {
                id: 2,
                value: 4.34,
              },
              {
                id: 3,
                value: 5.14,
              },
            ],
          },
          {
            id: 2,
            ploteName: 'Plot 3',
            housingNumber: '4 building.',
            quartalNumber: '4 quarter 2023',
            value: [
              {
                id: 4,
                value: 1.54,
              },
              {
                id: 5,
                value: 3.14,
              },
              {
                id: 6,
                value: 5.14,
              },
            ],
          },
          {
            id: 3,
            ploteName: 'Plot 13',
            housingNumber: '6 building.',
            quartalNumber: '1 quarter 2024',
            value: [
              {
                id: 7,
                value: 4.54,
              },
              {
                id: 8,
                value: 5.64,
              },
              {
                id: 9,
                value: 5.96,
              },
            ],
          },
          {
            id: 4,
            ploteName: 'Plot 14',
            housingNumber: '2 building.',
            quartalNumber: '3 quarter 2024',
            value: [
              {
                id: 10,
                value: 2.54,
              },
              {
                id: 11,
                value: 3.14,
              },
            ],
          },
          {
            id: 5,
            ploteName: 'Plot 13',
            housingNumber: '9 building.',
            quartalNumber: '3 quarter 2023',
            value: [
              {
                id: 12,
                value: 4.54,
              },
              {
                id: 13,
                value: 5.64,
              },
              {
                id: 14,
                value: 5.96,
              },
            ],
          },
          {
            id: 6,
            ploteName: 'Plot 10',
            housingNumber: '3 building.',
            quartalNumber: 'House handed over',
            value: [
              {
                id: 15,
                value: 2.54,
              },
              {
                id: 16,
                value: 4.14,
              },
              {
                id: 17,
                value: 5.92,
              },
            ],
          },
          {
            id: 7,
            ploteName: 'Plot 4',
            housingNumber: '6 building.',
            quartalNumber: '3 quarter 2023',
            value: [
              {
                id: 18,
                value: 4.54,
              },
              {
                id: 19,
                value: 4.74,
              },
              {
                id: 20,
                value: 5.12,
              },
            ],
          },
          {
            id: 8,
            ploteName: 'Plot 11',
            housingNumber: '4 building.',
            quartalNumber: 'House handed over',
            value: [
              {
                id: 21,
                value: 1.54,
              },
              {
                id: 22,
                value: 3.74,
              },
            ],
          },
        ],
      },
      {
        id: 'pantera-template',
        equipment: '',
        suggestions: '114 suggestions',
        image: 'project-2.jpg',
        complexName: 'RC Panther',
        subwayName: 'sw. Pionerskaya',
        walkTime: '35 min.',
        wayMoving: 'walk',
        isActive: false,
        selectTemplates: [
          {
            id: 9,
            ploteName: 'Plot 6',
            housingNumber: '4 building.',
            quartalNumber: '3 quarter 2023',
            value: [
              {
                id: 23,
                value: 1.74,
              },
              {
                id: 24,
                value: 2.74,
              },
              {
                id: 25,
                value: 3.74,
              },
            ],
          },
          {
            id: 10,
            ploteName: 'Plot 7',
            housingNumber: '3 building',
            quartalNumber: '3 quarter 2023',
            value: [
              {
                id: 26,
                value: 4.74,
              },
              {
                id: 27,
                value: 2.74,
              },
            ],
          },
          {
            id: 11,
            ploteName: 'Plot 8',
            housingNumber: '2 building',
            quartalNumber: '3 quarter 2023',
            value: [
              {
                id: 28,
                value: 3.34,
              },
              {
                id: 29,
                value: 4.14,
              },
            ],
          },
          {
            id: 12,
            ploteName: 'Plot 14',
            housingNumber: '1 building.',
            quartalNumber: '1 quarter 2024',
            value: [
              {
                id: 30,
                value: 3.54,
              },
              {
                id: 31,
                value: 4.34,
              },
              {
                id: 32,
                value: 5.14,
              },
            ],
          },
          {
            id: 13,
            ploteName: 'Plot 2',
            housingNumber: '6 building.',
            quartalNumber: '4 quarter 2024',
            value: [
              {
                id: 33,
                value: 1.54,
              },
              {
                id: 34,
                value: 4.34,
              },
            ],
          },
          {
            id: 14,
            ploteName: 'Plot 5',
            housingNumber: '5 building.',
            quartalNumber: '3 quarter 2024',
            value: [
              {
                id: 35,
                value: 5.54,
              },
              {
                id: 36,
                value: 6.14,
              },
            ],
          },
          {
            id: 15,
            ploteName: 'Plot 4',
            housingNumber: '2 building.',
            quartalNumber: 'House handed over',
            value: [
              {
                id: 37,
                value: 3.54,
              },
              {
                id: 38,
                value: 4.34,
              },
              {
                id: 39,
                value: 5.14,
              },
            ],
          },
          {
            id: 16,
            ploteName: 'Plot 12',
            housingNumber: '2 building.',
            quartalNumber: 'House handed over',
            value: [
              {
                id: 40,
                value: 1.54,
              },
              {
                id: 41,
                value: 4.34,
              },
            ],
          },
        ],
      },
      {
        id: 'egoist-template',
        equipment: 'Furnishing depends on scenario',
        suggestions: '94 suggestions',
        image: 'project-3.jpg',
        complexName: 'RC Egoist',
        subwayName: 'sw. Begovaya',
        walkTime: '15 min.',
        wayMoving: 'car',
        isActive: false,
        selectTemplates: [
          {
            id: 17,
            ploteName: 'Plot 1',
            housingNumber: '9 building.',
            quartalNumber: '1 quarter 2024',
            value: [
              {
                id: 42,
                value: 2.54,
              },
              {
                id: 43,
                value: 2.94,
              },
              {
                id: 44,
                value: 4.44,
              },
            ],
          },
          {
            id: 18,
            ploteName: 'Plot 4',
            housingNumber: '3 building.',
            quartalNumber: '4 quarter 2023',
            value: [
              {
                id: 45,
                value: 2.52,
              },
              {
                id: 46,
                value: 2.74,
              },
            ],
          },
          {
            id: 19,
            ploteName: 'Plot 4',
            housingNumber: '6 building.',
            quartalNumber: '4 quarter 2024',
            value: [
              {
                id: 47,
                value: 1.52,
              },
              {
                id: 48,
                value: 3.74,
              },
            ],
          },
          {
            id: 20,
            ploteName: 'Plot 1',
            housingNumber: '7 building.',
            quartalNumber: '1 quarter 2024',
            value: [
              {
                id: 49,
                value: 2.54,
              },
              {
                id: 50,
                value: 2.94,
              },
              {
                id: 51,
                value: 4.44,
              },
            ],
          },
          {
            id: 21,
            ploteName: 'Plot 2',
            housingNumber: '5 building.',
            quartalNumber: '3 quarter 2024',
            value: [
              {
                id: 52,
                value: 3.54,
              },
              {
                id: 53,
                value: 5.94,
              },
            ],
          },
          {
            id: 22,
            ploteName: 'Plot 5',
            housingNumber: '2 building.',
            quartalNumber: '3 quarter 2024',
            value: [
              {
                id: 54,
                value: 4.54,
              },
              {
                id: 55,
                value: 5.24,
              },
            ],
          },
          {
            id: 23,
            ploteName: 'Plot 6',
            housingNumber: '1 building.',
            quartalNumber: '4 quarter 2023',
            value: [
              {
                id: 56,
                value: 2.54,
              },
              {
                id: 57,
                value: 3.34,
              },
              {
                id: 58,
                value: 5.24,
              },
            ],
          },
          {
            id: 24,
            ploteName: 'Plot 3',
            housingNumber: '3 building.',
            quartalNumber: 'House handed over',
            value: [
              {
                id: 59,
                value: 2.54,
              },
              {
                id: 60,
                value: 3.34,
              },
              {
                id: 61,
                value: 5.24,
              },
            ],
          },
        ],
      },
    ];
  }

  async getCards() {
    return this.cards;
  }
}
