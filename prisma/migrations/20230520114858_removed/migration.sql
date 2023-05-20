/*
  Warnings:

  - You are about to drop the `weapons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "weapons" DROP CONSTRAINT "weapons_ninjaId_fkey";

-- DropTable
DROP TABLE "weapons";

-- CreateTable
CREATE TABLE "PrimaryWeapon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "damage" DOUBLE PRECISION DEFAULT 0.00,
    "damageType" TEXT DEFAULT 'Single',
    "attackSpeed" TEXT DEFAULT 'Slow',
    "weaponType" TEXT DEFAULT 'Light',
    "ninjaId" TEXT NOT NULL,

    CONSTRAINT "PrimaryWeapon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrimaryWeapon_ninjaId_key" ON "PrimaryWeapon"("ninjaId");

-- AddForeignKey
ALTER TABLE "PrimaryWeapon" ADD CONSTRAINT "PrimaryWeapon_ninjaId_fkey" FOREIGN KEY ("ninjaId") REFERENCES "ninjas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
