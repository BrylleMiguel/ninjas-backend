/*
  Warnings:

  - Made the column `damage` on table `Secondary_Weapons` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Secondary_Weapons" ALTER COLUMN "damage" SET NOT NULL,
ALTER COLUMN "count" DROP NOT NULL;
