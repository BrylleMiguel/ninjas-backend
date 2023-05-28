-- CreateTable
CREATE TABLE "CharacterList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "element" TEXT NOT NULL,
    "resistancePercentage" DOUBLE PRECISION NOT NULL,
    "bonusDamage" DOUBLE PRECISION NOT NULL,
    "bonusElementDamage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CharacterList_pkey" PRIMARY KEY ("id")
);
