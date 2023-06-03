import { Controller, Get } from '@nestjs/common';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private pet: PetService) {}
  @Get('all')
  async all() {
    return await this.pet.all();
  }
}
