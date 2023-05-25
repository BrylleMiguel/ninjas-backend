/*
  Warnings:

  - You are about to drop the `PrimaryWeapon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ninjas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PrimaryWeapon" DROP CONSTRAINT "PrimaryWeapon_ninjaId_fkey";

-- DropTable
DROP TABLE "PrimaryWeapon";

-- DropTable
DROP TABLE "ninjas";

-- CreateTable
CREATE TABLE "Ninjas" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,

    CONSTRAINT "Ninjas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Primary_Weapons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "damage" DOUBLE PRECISION DEFAULT 0.00,
    "damageType" TEXT DEFAULT 'Single',
    "attackSpeed" TEXT DEFAULT 'Slow',
    "weaponType" TEXT DEFAULT 'Light',
    "ninjaId" TEXT NOT NULL,

    CONSTRAINT "Primary_Weapons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Primary_Weapons_ninjaId_key" ON "Primary_Weapons"("ninjaId");

-- AddForeignKey
ALTER TABLE "Primary_Weapons" ADD CONSTRAINT "Primary_Weapons_ninjaId_fkey" FOREIGN KEY ("ninjaId") REFERENCES "Ninjas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
