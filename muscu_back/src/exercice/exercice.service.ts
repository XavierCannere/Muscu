import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Exercice } from "./exercice.entity";

@Injectable()
export class ExerciceService {

  constructor(
      @InjectRepository(Exercice)
      private readonly exercice_repository: Repository<Exercice>,
    ) {}

  async findAll(): Promise<Exercice[]> {
      return this.exercice_repository.find();
  }

  async findOne(id: number): Promise<Exercice> {
      return this.exercice_repository.findOneBy({id});
  }

  async findByEntrainement(id_entrainement: number): Promise<Exercice[]> {
      return this.exercice_repository.query("SELECT * FROM exercice WHERE exercice.id IN (SELECT exercice_id FROM entrainement_exercice WHERE entrainement_id = $1)", [id_entrainement]);
  }
}