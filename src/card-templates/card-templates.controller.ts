import { Controller, Get } from '@nestjs/common';
import { CardTemplatesService } from './card-templates.service';

@Controller('card-templates')
export class CardTemplatesController {
  constructor(private readonly cardTemplatesService: CardTemplatesService) {}

  @Get()
  async getCards() {
    return this.cardTemplatesService.getCards();
  }
}
