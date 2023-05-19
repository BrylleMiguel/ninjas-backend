// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const AXE = prisma.weaponList.create({
    data: {
      name: 'Axe',
      attackSpeed: 'Slow',
      damage: 7.83,
      weaponType: 'Heavy',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
