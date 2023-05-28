import { Controller, Get } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private character: CharacterService) {}
  @Get('all')
  async all() {
    return await this.character.all();
  }
}
