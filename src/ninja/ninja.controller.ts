import { Body, Controller, Get, Post } from '@nestjs/common';
import { Create } from './dto/create.dto';
import { NinjaService } from './ninja.service';

@Controller('ninja')
export class NinjaController {
  constructor(private ninja: NinjaService) {}

  @Post('create')
  async create(@Body() dto: Create) {
    return this.ninja.create(dto);
  }

  @Get('all')
  async all() {
    return this.ninja.all();
  }

  @Get('axe')
  async axe() {
    return this.ninja.axe();
  }
}
