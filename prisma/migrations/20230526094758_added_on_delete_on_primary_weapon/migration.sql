-- DropForeignKey
ALTER TABLE "Primary_Weapons" DROP CONSTRAINT "Primary_Weapons_ninjaId_fkey";

-- AddForeignKey
ALTER TABLE "Primary_Weapons" ADD CONSTRAINT "Primary_Weapons_ninjaId_fkey" FOREIGN KEY ("ninjaId") REFERENCES "Ninjas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
