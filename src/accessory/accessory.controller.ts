import { Controller, Get } from '@nestjs/common';
import { AccessoryService } from './accessory.service';

@Controller('accessory')
export class AccessoryController {
  constructor(private accessory: AccessoryService) {}

  @Get('all')
  async all() {
    return this.accessory.all();
  }
}
