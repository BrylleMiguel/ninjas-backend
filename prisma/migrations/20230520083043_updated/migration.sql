/*
  Warnings:

  - You are about to drop the column `WeaponType` on the `weapons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "weapons" DROP COLUMN "WeaponType",
ADD COLUMN     "weaponType" TEXT DEFAULT 'Light';
