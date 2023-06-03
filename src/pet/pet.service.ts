import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) {}

  all() {
    return this.prisma.petList.findMany({});
  }
}
