import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { WeaponListService } from './weapon-list.service';

@Controller('weapons')
export class WeaponListController {
  constructor(private weapon: WeaponListService) {}
  @Get()
  async all() {
    return await this.weapon.all();
  }

  @Get('selected-weapon')
  async selectedWeapon(@Query('name') name: string) {
    if (name) {
      const weapon = await this.weapon.selectedWeapon(name);
      if (weapon) {
        return weapon;
      } else {
        throw new NotFoundException('Weapon not found');
      }
    } else {
      throw new BadRequestException('Name parameter is required');
    }
  }
}
