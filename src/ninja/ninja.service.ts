import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Create } from './dto/create.dto';

@Injectable()
export class NinjaService {
  constructor(private prisma: PrismaService) {}
  create(dto: Create) {
    return this.prisma.ninja.create({
      data: {
        name: dto.name,
        primaryWeapon: { create: dto.primaryWeapon },
      },
      include: {
        primaryWeapon: true,
      },
    });
  }

  all() {
    return this.prisma.ninja.findMany({});
  }
}
