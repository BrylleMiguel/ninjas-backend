import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CharacterModule } from './character/character.module';
import { NinjaModule } from './ninja/ninja.module';
import { PrimaryWeaponModule } from './primary-weapon/primary-weapon.module';
import { PrismaModule } from './prisma/prisma.module';
import { SecondaryWeaponModule } from './secondary-weapon/secondary-weapon.module';
import { AccessoryModule } from './accessory/accessory.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    NinjaModule,
    PrimaryWeaponModule,
    CharacterModule,
    SecondaryWeaponModule,
    AccessoryModule,
  ],
})
export class AppModule {}
