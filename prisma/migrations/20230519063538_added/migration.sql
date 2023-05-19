/*
  Warnings:

  - The `attackSpeed` column on the `weapons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Axe` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "weapons" ADD COLUMN     "WeaponType" TEXT DEFAULT 'light',
ADD COLUMN     "damageType" DOUBLE PRECISION DEFAULT 0,
DROP COLUMN "attackSpeed",
ADD COLUMN     "attackSpeed" TEXT DEFAULT 'slow';

-- DropTable
DROP TABLE "Axe";

-- DropEnum
DROP TYPE "AttackSpeed";

-- CreateTable
CREATE TABLE "WeaponList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "damage" DOUBLE PRECISION DEFAULT 0.00,
    "attackSpeed" TEXT,
    "weaponType" TEXT,

    CONSTRAINT "WeaponList_pkey" PRIMARY KEY ("id")
);
