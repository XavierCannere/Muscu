import { Controller, Get, Param } from '@nestjs/common';
import { GroupeMusculaire } from './groupe_musculaire.entity';
import { GroupeMusculaireService } from './groupe_musculaire.service';

@Controller('exercice')
export class GroupeMusculaireController {

    constructor(private readonly groupe_musculaire_service: GroupeMusculaireService) {}
    
    @Get()
    async findAll() {
        return this.groupe_musculaire_service.findAll();
    }

    @Get(':id') 
    async findOne(@Param('id') id: number) {
        return this.groupe_musculaire_service.findOne(id);
    }
}
