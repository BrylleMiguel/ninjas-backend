import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { NinjaModule } from './ninja/ninja.module';
import { WeaponListModule } from './weapon-list/weapon-list.module';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true }), NinjaModule, WeaponListModule],
})
export class AppModule {}
