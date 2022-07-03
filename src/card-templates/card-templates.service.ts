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
      },
    ];
  }

  async getCards() {
    return this.cards;
  }
}
