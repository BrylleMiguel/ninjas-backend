/*
  Warnings:

  - You are about to drop the `pets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_ninjaId_fkey";

-- DropTable
DROP TABLE "pets";

-- CreateTable
CREATE TABLE "Secondary_Weapons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "damage" DOUBLE PRECISION,
    "count" INTEGER NOT NULL,
    "ninjaId" TEXT NOT NULL,

    CONSTRAINT "Secondary_Weapons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accessories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "radius" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Accessories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pets" (
    "id" TEXT NOT NULL,
    "pet" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "skill" TEXT NOT NULL,
    "skillDescription" TEXT,
    "ninjaId" TEXT NOT NULL,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Secondary_Weapons_ninjaId_key" ON "Secondary_Weapons"("ninjaId");

-- CreateIndex
CREATE UNIQUE INDEX "Pets_ninjaId_key" ON "Pets"("ninjaId");

-- AddForeignKey
ALTER TABLE "Secondary_Weapons" ADD CONSTRAINT "Secondary_Weapons_ninjaId_fkey" FOREIGN KEY ("ninjaId") REFERENCES "Ninjas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_ninjaId_fkey" FOREIGN KEY ("ninjaId") REFERENCES "Ninjas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
