import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

@Module({
  providers: [CharacterService],
  controllers: [CharacterController],
})
export class CharacterModule {}
