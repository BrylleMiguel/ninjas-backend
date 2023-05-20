/*
  Warnings:

  - A unique constraint covering the columns `[ninjaId]` on the table `weapons` will be added. If there are existing duplicate values, this will fail.
  - Made the column `ninjaId` on table `weapons` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "weapons" DROP CONSTRAINT "weapons_ninjaId_fkey";

-- AlterTable
ALTER TABLE "weapons" ALTER COLUMN "ninjaId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "weapons_ninjaId_key" ON "weapons"("ninjaId");

-- AddForeignKey
ALTER TABLE "weapons" ADD CONSTRAINT "weapons_ninjaId_fkey" FOREIGN KEY ("ninjaId") REFERENCES "ninjas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
