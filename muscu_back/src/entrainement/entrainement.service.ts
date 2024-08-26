import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Entrainement } from './entrainement.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntrainementDTO } from './entrainement.dto';

@Injectable()
export class EntrainementService {

  constructor(
      @InjectRepository(Entrainement)
      private readonly entrainement_repository: Repository<Entrainement>,
    ) {}

  async findAll(): Promise<Entrainement[]> {
      return this.entrainement_repository.find();
  }

  async findOne(id: number): Promise<Entrainement> {
      return this.entrainement_repository.findOneBy({id});
  }

  async create(entrainementDTO: EntrainementDTO) {
    const entrainement = new Entrainement();
    entrainement.nom_entrainement = entrainementDTO.nom_entrainement;
    return this.entrainement_repository.save(entrainement);
  }

  async update(id: number, entrainementDTO: EntrainementDTO) {
    const entrainement = await this.findOne(id);
    entrainement.nom_entrainement = entrainementDTO.nom_entrainement;
    return this.entrainement_repository.save(entrainement);
  }
}
