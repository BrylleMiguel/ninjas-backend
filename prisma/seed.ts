import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const WEAPON_LIST = [
    {
      id: 'AXE-ID-000',
      name: 'axe',
      attackSpeed: 'Slow',
      damage: 7.83,
      damageType: 'MULTIPLE',
      weaponType: 'Heavy',
    },
    {
      id: 'LONG-SWORD-ID-000',
      name: 'long-sword',
      attackSpeed: 'Avg',
      damage: 9.13,
      damageType: 'SINGLE_MULTIPLE',
      weaponType: 'Heavy',
    },
    {
      id: 'BOW-ID-000',
      name: 'bow',
      attackSpeed: 'Avg',
      damage: 3.13,
      damageType: 'SINGLE',
      weaponType: 'light',
    },
  ];

  for (const weapon of WEAPON_LIST) {
    const res = await prisma.weaponList.upsert({
      where: { id: weapon.id },
      create: weapon,
      update: weapon,
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
    await prisma.$disconnect();
  });
