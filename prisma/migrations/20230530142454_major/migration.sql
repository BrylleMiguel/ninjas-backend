/*
  Warnings:

  - You are about to drop the `WeaponList` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Accessories" ALTER COLUMN "count" DROP NOT NULL;

-- DropTable
DROP TABLE "WeaponList";

-- CreateTable
CREATE TABLE "PrimaryWeaponList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "damage" DOUBLE PRECISION DEFAULT 0.00,
    "damageType" TEXT,
    "attackSpeed" TEXT,
    "weaponType" TEXT,

    CONSTRAINT "PrimaryWeaponList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecondaryWeaponList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "damage" DOUBLE PRECISION DEFAULT 0.00,

    CONSTRAINT "SecondaryWeaponList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccessoryList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "radius" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "AccessoryList_pkey" PRIMARY KEY ("id")
);
