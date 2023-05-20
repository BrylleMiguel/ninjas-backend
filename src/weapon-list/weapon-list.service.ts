import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WeaponListService {
  constructor(private prisma: PrismaService) {}

  all() {
    return this.prisma.weaponList.findMany({});
  }

  selectedWeapon(name: string) {
    return this.prisma.weaponList.findFirst({
      where: { name },
    });
  }
}
