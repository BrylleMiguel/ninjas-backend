import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { NinjaModule } from './ninja/ninja.module';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true }), NinjaModule],
})
export class AppModule {}
