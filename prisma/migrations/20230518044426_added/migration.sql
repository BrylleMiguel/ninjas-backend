-- CreateEnum
CREATE TYPE "AttackSpeed" AS ENUM ('SLOW', 'AVG', 'INSTANT');

-- AlterTable
ALTER TABLE "weapons" ADD COLUMN     "attackSpeed" "AttackSpeed";
