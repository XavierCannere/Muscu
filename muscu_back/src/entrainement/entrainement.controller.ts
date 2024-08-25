import { Controller, Get, Param } from '@nestjs/common';
import { EntrainementService } from './entrainement.service';

@Controller('entrainement')
export class EntrainementController {

    constructor(private readonly entrainement_service: EntrainementService) {}
    
    @Get()
    async findAll() {
        return this.entrainement_service.findAll();
    }

    @Get(':id') 
    async findOne(@Param('id') id: number) {
        return this.entrainement_service.findOne(id);
    }
}
