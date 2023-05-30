import { Module } from '@nestjs/common';
import { PrimaryWeaponController } from './primary-weapon.controller';
import { PrimaryWeaponService } from './primary-weapon.service';

@Module({
  providers: [PrimaryWeaponService],
  controllers: [PrimaryWeaponController],
})
export class PrimaryWeaponModule {}
