/*
  Warnings:

  - A unique constraint covering the columns `[ninjaId]` on the table `Accessories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ninjaId` to the `Accessories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accessories" ADD COLUMN     "ninjaId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Accessories_ninjaId_key" ON "Accessories"("ninjaId");

-- AddForeignKey
ALTER TABLE "Accessories" ADD CONSTRAINT "Accessories_ninjaId_fkey" FOREIGN KEY ("ninjaId") REFERENCES "Ninjas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
