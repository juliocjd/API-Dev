-- CreateTable
CREATE TABLE "developers" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "sex" TEXT,
    "age" INTEGER,
    "hobby" TEXT,
    "birthdate" TIMESTAMP(3),

    CONSTRAINT "developers_pkey" PRIMARY KEY ("id")
);
