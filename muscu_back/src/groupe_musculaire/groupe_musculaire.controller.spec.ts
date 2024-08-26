import { Test, TestingModule } from '@nestjs/testing';
import { GroupeMusculaireController } from './groupe_musculaire.controller';

describe('GroupeMusculaireController', () => {
  let controller: GroupeMusculaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupeMusculaireController],
    }).compile();

    controller = module.get<GroupeMusculaireController>(GroupeMusculaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
