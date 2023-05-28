import { Module } from '@nestjs/common';
import { WeaponController } from './weapon.controller';
import { WeaponService } from './weapon.service';

@Module({
  providers: [WeaponService],
  controllers: [WeaponController],
})
export class WeaponModule {}
