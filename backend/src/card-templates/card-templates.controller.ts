import { Controller, Get } from '@nestjs/common';
import { CardTemplatesService } from './card-templates.service';

@Controller('api')
export class CardTemplatesController {
	constructor(private readonly cardTemplatesService: CardTemplatesService) {}

	@Get('/card-templates')
	async getCards() {
		return this.cardTemplatesService.getCards();
	}
}
