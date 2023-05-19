import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const WEAPON_LIST = [
    {
      id: 'AXE-ID-000',
      name: 'Axe',
      attackSpeed: 'Slow',
      damage: 7.83,
      damageType: 'MULTIPLE',
      weaponType: 'Heavy',
    },
    {
      id: 'LONG-SWORD-ID-000',
      name: 'Long Sword',
      attackSpeed: 'Avg',
      damage: 9.13,
      damageType: 'SINGLE_MULTIPLE',
      weaponType: 'Heavy',
    },
  ];

  for (const weapon of WEAPON_LIST) {
    const res = await prisma.weaponList.createMany({
      data: weapon,
      skipDuplicates: true,
    });

    console.log({ res });
  }
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
