import { Controller, Get } from '@nestjs/common';
import { SecondaryWeaponService } from './secondary-weapon.service';

@Controller('secondary-weapon')
export class SecondaryWeaponController {
  constructor(private secondaryWeapon: SecondaryWeaponService) {}
  @Get('all')
  async all() {}
}
