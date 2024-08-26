import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { EntrainementService } from './entrainement.service';
import { EntrainementDTO } from './entrainement.dto';

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

    @Post()
    async create(@Body() entrainementDTO: EntrainementDTO) {
        return this.entrainement_service.create(entrainementDTO);
    }

    @Patch(':id')  
    async update(@Param('id') id: number, @Body() entrainementDTO: EntrainementDTO) {
        return this.entrainement_service.update(id, entrainementDTO);
    }
}
