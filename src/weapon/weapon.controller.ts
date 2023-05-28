import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { WeaponService } from './weapon.service';

@Controller('weapons')
export class WeaponController {
  constructor(private weapon: WeaponService) {}
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
