import { Test, TestingModule } from '@nestjs/testing';
import { CardTemplatesService } from './card-templates.service';

describe('CardTemplatesService', () => {
  let service: CardTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardTemplatesService],
    }).compile();

    service = module.get<CardTemplatesService>(CardTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
