import { Module } from '@nestjs/common';
import { AccessoryService } from './accessory.service';
import { AccessoryController } from './accessory.controller';

@Module({
  providers: [AccessoryService],
  controllers: [AccessoryController]
})
export class AccessoryModule {}
