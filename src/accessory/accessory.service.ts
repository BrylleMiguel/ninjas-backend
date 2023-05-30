import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccessoryService {
  constructor(private prisma: PrismaService) {}

  all() {
    return this.prisma.accessoryList.findMany({});
  }
}
