import { Controller, Get } from '@nestjs/common';
import { CardTemplatesService } from './card-templates.service';

@Controller('card-templates')
export class CardTemplatesController {
  constructor(private readonly CardTemplatesService: CardTemplatesService) {}

  @Get()
  getCards(): any {
    return this.CardTemplatesService.getCards();
  }
}
