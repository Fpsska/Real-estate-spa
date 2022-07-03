import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardTemplatesModule } from './card-templates/card-templates.module';

@Module({
  imports: [CardTemplatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
