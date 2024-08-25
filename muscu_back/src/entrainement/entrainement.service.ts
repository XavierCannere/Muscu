import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Entrainement } from './entrainement.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EntrainementService {

    constructor(
        @InjectRepository(Entrainement)
        private readonly entrainement_repository: Repository<Entrainement>,
      ) {}

    async findAll(): Promise<Entrainement[]> {
        return this.entrainement_repository.find();
    }

    findOne(id: number): Promise<Entrainement> {
        return this.entrainement_repository.findOneBy({id});
      }
      

}
