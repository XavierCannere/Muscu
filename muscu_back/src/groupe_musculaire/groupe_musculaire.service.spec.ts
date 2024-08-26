import { Test, TestingModule } from '@nestjs/testing';
import { GroupeMusculaireService } from './groupe_musculaire.service';

describe('GroupeMusculaireService', () => {
  let service: GroupeMusculaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupeMusculaireService],
    }).compile();

    service = module.get<GroupeMusculaireService>(GroupeMusculaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
