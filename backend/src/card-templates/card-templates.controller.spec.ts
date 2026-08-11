import { Test, TestingModule } from '@nestjs/testing';
import { CardTemplatesController } from './card-templates.controller';

describe('CardTemplatesController', () => {
  let controller: CardTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardTemplatesController],
    }).compile();

    controller = module.get<CardTemplatesController>(CardTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
