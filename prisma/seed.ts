import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const WEAPON_LIST = [
    {
      id: 'AXE-ID-000',
      name: 'axe',
      attackSpeed: 'slow',
      damage: 7.83,
      damageType: 'MULTIPLE',
      weaponType: 'heavy',
    },
    {
      id: 'LONG-SWORD-ID-000',
      name: 'long-sword',
      attackSpeed: 'avg',
      damage: 9.13,
      damageType: 'SINGLE_MULTIPLE',
      weaponType: 'heavy',
    },
    {
      id: 'BOW-ID-000',
      name: 'bow',
      attackSpeed: 'avg',
      damage: 3.13,
      damageType: 'SINGLE',
      weaponType: 'light',
    },
  ];

  const CHARACTER_LIST = [
    {
      id: 'CHAR-ID-000',
      name: 'oceanus',
      description:
        'Oceanus, the ninja of water, possessed unparalleled agility and grace. With flowing movements, he could manipulate water, using it as a shield or a weapon. His calm demeanor and deep understanding of the ebb and flow of life made him a pillar of wisdom among his companions.',
      element: 'water',
      resistancePercentage: 0.3,
      bonusDamage: 1.3,
      bonusElementDamage: 0.55,
    },
    {
      id: 'CHAR-ID-001',
      name: 'ashes',
      description:
        'Ashes, the ninja of fire, was a master of destruction and rebirth. Harnessing the fiery energy within him, he could conjure flames that could engulf his enemies or forge paths through obstacles. Yet, Ashes remained disciplined, seeking not to cause harm but to purify and create new beginnings.',
      element: 'fire',
      resistancePercentage: 0.5,
      bonusDamage: 1.1,
      bonusElementDamage: 0.63,
    },
    {
      id: 'CHAR-ID-002',
      name: 'eartha',
      description: `Eartha, the ninja of earth, epitomized strength and endurance. Her connection to the land granted her the power to manipulate the very earth beneath her feet. She could create impenetrable barriers or summon the earth's energy to heal wounds and restore balance.`,
      element: 'earth',
      resistancePercentage: 2.9,
      bonusDamage: 0.3,
      bonusElementDamage: 0.3,
    },
    {
      id: 'CHAR-ID-003',
      name: 'nimbus',
      description:
        'Nimbus, the ninja of air, possessed unparalleled speed and agility. Swift as the wind, he moved with grace and dexterity, his footsteps whispering through the air. With his ability to control the currents and breezes, Nimbus could render himself invisible or create powerful gusts that could disarm his opponents.',
      element: 'air',
      resistancePercentage: 0.9,
      bonusDamage: 2.1,
      bonusElementDamage: 1.3,
    },
    {
      id: 'CHAR-ID-004',
      name: 'styx',
      description: `Styx, the enigmatic ninja of void, embodied the unseen and mysterious. His powers transcended the physical realm, allowing him to manipulate shadows, conceal his presence, and traverse dimensions. Styx's mastery over the void made him an invaluable asset in gathering intelligence and outmaneuvering their enemies.`,
      element: 'void',
      resistancePercentage: 0.3,
      bonusDamage: 3.0,
      bonusElementDamage: 3.0,
    },
  ];

  const SECONDARY_WEAPON_LIST = [
    {
      id: 'SHURIKEN-ID',
      name: 'shuriken',
      damage: 1.99,
    },
    {
      id: 'KUNAI-ID',
      name: 'kunai',
      damage: 2.39,
    },
  ];

  const ACCESSORIES = [
    {
      id: 'SMOKE-BOMB-ID',
      name: 'smoke bomb',
      type: 'smoke',
      radius: 150, // units radius
    },
    {
      id: 'SLEEPING-BOMB-ID',
      name: 'sleeping bomb',
      type: 'non-lethal',
      radius: 100, // units radius
    },
    {
      id: 'POISON-GAS-BOMB-ID',
      name: 'poison bomb',
      type: 'lethal',
      radius: 130, // units radius
    },
  ];

  for (const weapon of WEAPON_LIST) {
    const res = await prisma.primaryWeaponList.upsert({
      where: { id: weapon.id },
      create: weapon,
      update: weapon,
    });
    console.log({ primaries: res });
  }

  for (const weapon of SECONDARY_WEAPON_LIST) {
    const res = await prisma.secondaryWeaponList.upsert({
      where: { id: weapon.id },
      create: weapon,
      update: weapon,
    });
    console.log({ secondaries: res });
  }

  for (const accesory of ACCESSORIES) {
    const res = await prisma.accessoryList.upsert({
      where: { id: accesory.id },
      create: accesory,
      update: accesory,
    });
    console.log({ secondaries: res });
  }

  for (const char of CHARACTER_LIST) {
    const res = await prisma.characterList.upsert({
      where: { id: char.id },
      create: char,
      update: char,
    });
    console.log({ characters: res });
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
