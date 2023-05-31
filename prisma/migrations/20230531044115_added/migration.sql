-- CreateTable
CREATE TABLE "PetList" (
    "id" TEXT NOT NULL,
    "pet" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "skill" TEXT NOT NULL,
    "skillDescription" TEXT,

    CONSTRAINT "PetList_pkey" PRIMARY KEY ("id")
);
