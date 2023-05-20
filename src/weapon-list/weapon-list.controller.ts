import { Controller, Get, Query } from '@nestjs/common';
import { WeaponListService } from './weapon-list.service';

@Controller('weapons')
export class WeaponListController {
  constructor(private readonly weapon: WeaponListService) {}
  @Get()
  async all() {
    return await this.weapon.all();
  }

  @Get('selected-weapon')
  async selectedWeapon(@Query('name') name: string) {
    if (name) {
      return await this.weapon.selectedWeapon(name);
    }
  }
}
