-- CreateTable
CREATE TABLE "ninjas" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,

    CONSTRAINT "ninjas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weapons" (
    "id" SERIAL NOT NULL,
    "ninjaId" TEXT,

    CONSTRAINT "weapons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "weapons" ADD CONSTRAINT "weapons_ninjaId_fkey" FOREIGN KEY ("ninjaId") REFERENCES "ninjas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
