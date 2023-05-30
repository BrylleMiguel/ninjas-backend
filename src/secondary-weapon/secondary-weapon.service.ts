import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SecondaryWeaponService {
  constructor(private prisma: PrismaService) {}
  all() {
    return this.prisma.secondaryWeaponList.findMany({});
  }
}
