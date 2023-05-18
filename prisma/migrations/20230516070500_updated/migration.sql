/*
  Warnings:

  - Added the required column `name` to the `weapons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "weapons" ADD COLUMN     "damage" DOUBLE PRECISION DEFAULT 0.00,
ADD COLUMN     "name" TEXT NOT NULL;
