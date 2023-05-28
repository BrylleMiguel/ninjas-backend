import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NinjaModule } from './ninja/ninja.module';
import { PrismaModule } from './prisma/prisma.module';
import { WeaponModule } from './weapon/weapon.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    NinjaModule,
    WeaponModule,
    CharacterModule,
  ],
})
export class AppModule {}
