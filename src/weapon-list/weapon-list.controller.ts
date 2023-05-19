import { Controller, Get } from '@nestjs/common';
import { WeaponListService } from './weapon-list.service';

@Controller('weapon-list')
export class WeaponListController {
  constructor(private readonly weapon: WeaponListService) {}
  @Get()
  async all() {
    return this.weapon.all();
  }
}
