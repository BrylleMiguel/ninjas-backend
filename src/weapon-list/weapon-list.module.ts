import { Module } from '@nestjs/common';
import { WeaponListService } from './weapon-list.service';
import { WeaponListController } from './weapon-list.controller';

@Module({
  providers: [WeaponListService],
  controllers: [WeaponListController]
})
export class WeaponListModule {}
