import { Controller, Get, Param } from '@nestjs/common';
import { ExerciceService } from './exercice.service';

@Controller('exercice')
export class ExerciceController {

    constructor(private readonly exercice_service: ExerciceService) {}
    
    @Get()
    async findAll() {
        return this.exercice_service.findAll();
    }

    @Get(':id') 
    async findOne(@Param('id') id: number) {
        return this.exercice_service.findOne(id);
    }

    @Get('entrainement/:id_entrainement')
    async findByEntrainement(@Param('id_entrainement') id_entrainement: number) {
            return this.exercice_service.findByEntrainement(id_entrainement);
    }
}
