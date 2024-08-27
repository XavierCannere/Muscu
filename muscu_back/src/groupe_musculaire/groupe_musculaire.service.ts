import { Repository } from "typeorm";
import { GroupeMusculaire } from "./groupe_musculaire.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GroupeMusculaireService {

  constructor(
      @InjectRepository(GroupeMusculaire)
      private readonly groupe_musculaire_repository: Repository<GroupeMusculaire>,
    ) {}

  async findAll(): Promise<GroupeMusculaire[]> {
      return this.groupe_musculaire_repository.find();
  }

  async findOne(id: number): Promise<GroupeMusculaire> {
      return this.groupe_musculaire_repository.findOneBy({id});
  }
}