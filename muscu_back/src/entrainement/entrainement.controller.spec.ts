import { Test, TestingModule } from '@nestjs/testing';
import { EntrainementController } from './entrainement.controller';

describe('EntrainementController', () => {
  let controller: EntrainementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrainementController],
    }).compile();

    controller = module.get<EntrainementController>(EntrainementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
