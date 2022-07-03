import { Module } from '@nestjs/common';
import { CardTemplatesController } from './card-templates.controller';
import { CardTemplatesService } from './card-templates.service';

@Module({
  providers: [CardTemplatesService],
  controllers: [CardTemplatesController],
})
export class CardTemplatesModule {}
