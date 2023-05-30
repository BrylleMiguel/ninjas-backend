import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrimaryWeaponService {
  constructor(private prisma: PrismaService) {}

  all() {
    return this.prisma.primaryWeaponList.findMany({});
  }

  selectedWeapon(name: string) {
    return this.prisma.primaryWeaponList.findFirst({
      where: { name },
    });
  }
}
