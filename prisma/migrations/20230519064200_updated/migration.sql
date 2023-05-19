-- AlterTable
ALTER TABLE "WeaponList" ADD COLUMN     "damageType" TEXT;

-- AlterTable
ALTER TABLE "weapons" ALTER COLUMN "WeaponType" SET DEFAULT 'Light',
ALTER COLUMN "damageType" SET DEFAULT 'Single',
ALTER COLUMN "damageType" SET DATA TYPE TEXT,
ALTER COLUMN "attackSpeed" SET DEFAULT 'Slow';
