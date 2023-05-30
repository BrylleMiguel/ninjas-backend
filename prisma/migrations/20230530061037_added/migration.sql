-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "pet" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "skillDescription" TEXT NOT NULL,
    "ninjaId" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pets_ninjaId_key" ON "pets"("ninjaId");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_ninjaId_fkey" FOREIGN KEY ("ninjaId") REFERENCES "Ninjas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
