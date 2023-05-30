import { Module } from '@nestjs/common';
import { SecondaryWeaponService } from './secondary-weapon.service';
import { SecondaryWeaponController } from './secondary-weapon.controller';

@Module({
  providers: [SecondaryWeaponService],
  controllers: [SecondaryWeaponController]
})
export class SecondaryWeaponModule {}
